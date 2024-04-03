## How to use this?

You need to have Node.js installed on your machine. Also you need to have pnpm installed globally. If you don't have pnpm installed, you can install it by running the following command

```bash
npm install -g pnpm
```

1. Clone the repository
2. Run the following command to install the dependencies

```bash
pnpm install
```

3. Run the following command to start the development server

```bash
pnpm run dev:server
```

## Routes

- `/` - Base route
- `/api/v1/mail` - Mail API

## To send mail

Route - `/api/v1/mail`
Method - `POST`
Body -

```json
{
  "to": "emailOfTheReceiver@example.com", //it can be an array of emails
  "subject": "Subject of the mail",
  "text": "Text of the mail" //or in html
}
```

## Environment Variables

See .env.example file for the environment variables

## Limitations
- You can only send maybe 500 mails per day using you gmail account in free tier.
