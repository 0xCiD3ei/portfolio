import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import ContactFormEmail from "../../components/email-component/ContactForEmail";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const {name, email, message} = body;
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to:  "duytienabc123@gmail.com",
    subject: "Message from contact form",
    reply_to: email,
    react: ContactFormEmail({
      name: name,
      message: message,
      senderEmail: email
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};