"use server";
import { ErrorMessage } from "@hookform/error-message";

import { Resend } from "resend";

const sendEmail = async (email: string, message: string) => {
  // console.log("process->", process.env.RESEND_API_KEY);
  const resend = new Resend(process.env.RESEND_API_KEY);
  interface IdType {
    id: string;
  }

  interface ErrorType {
    statusCode: number;
    message: string;
    name: string;
  }

  type dataType = IdType | ErrorType;

  let data: dataType;
  let ErrorMessage;
  try {
    data = await resend.emails.send({
      from: "Contact Form <updates@updates.mones.dev>",
      to: "mones.paralex@gmail.com",
      subject: "Mail From Landing Page",
      reply_to: email,
      html: "<p>" + message + "</p>",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (
      "statusCode" in data &&
      "message" in data &&
      (data.statusCode === 500 || data.statusCode === 400)
    ) {
      ErrorMessage = data.message;
      return { ErrorMessage };
    }
    return { data };
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "message" in error) {
      ErrorMessage = "Somethings went wrong" + error.message;
    } else {
      ErrorMessage = "Somethings went wrong";
    }
    return { ErrorMessage };
  }
};

export default sendEmail;

// todo simple serverside validation needed
// store validateString, getErrorMessage in @/lib/utils
// where getErrorMessage is a function that takes error arugments and check its type and returns a string
// where validateString is a function that takes a string and returns a boolean

// todo use a template for proper email html body
// use @react-email/tailwind"
// use @react-email/components
