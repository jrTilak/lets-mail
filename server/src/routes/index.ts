import { Router } from "express";
import { sendMail } from "../controllers/mailController.js";

const appRouter = Router();

appRouter.post("/mail", sendMail);

export default appRouter;
