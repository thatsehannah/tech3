"use server";

import { NewMessage } from "@/types";
import { Resend } from "resend";

//TODO: create an email template component
export const sendBatchEmails = async (data: NewMessage) => {
  const resend = new Resend(process.env.RESEND_API_KEY as string);

  const firstName =
    data.name.indexOf(" ") > 0 ? data.name.split(" ")[0] : data.name;

  try {
    const response = await resend.batch.send([
      {
        from: `Third Gen Studio <${process.env.SENDER_EMAIL as string}>`,
        to: data.email,
        subject: "Thank you for your inquiry",
        html: `<p>Thanks ${firstName} for contacting me. I'll be in touch soon!</p>`,
      },
      {
        from: `Third Gen Studio <${process.env.SENDER_EMAIL as string}>`,
        to: process.env.PRIVATE_EMAIL as string,
        subject: "New message inquiry from 3GS",
        html: `<p>New message from ${data.name}:</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      },
    ]);

    if (response.data) {
      return `Thanks ${firstName}. I'll be in contact soon.`;
    }
  } catch {
    throw new Error(`Sorry ${firstName}! Something went wrong 😑`);
  }
};
