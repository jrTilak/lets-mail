import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendMail = async (req: Request, res: Response) => {
  try {
    const { to, subject, text } = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `${process.env.USER_NAME} <${process.env.MAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log("Message sent: %s", info.messageId);
    res.send({
      status: "success",
      message: "Email sent successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Email not sent",
      error: error.message,
    });
  }
};
