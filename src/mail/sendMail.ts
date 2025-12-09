"use server";
import { sendmail } from "./mail";
import { generateEnquiryEmailTemplate } from "./emailTemplate";

interface SendFuncProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const send = async ({
  name,
  email,
  subject,
  message,
}: SendFuncProps): Promise<boolean> => {
  const emailBody = generateEnquiryEmailTemplate({
    name: name,
    email,
    subject,
    message,
  });

  try {
    await sendmail({
      to: ["saifalam.st@gmail.com"],
      name: "Saif Alam",
      subject: "Enquiry From Website Saifalam Portfolio",
      body: emailBody,
    });

    return true;
  } catch (error) {
    console.error("Error sending mail:", error);
    return false;
  }
};
