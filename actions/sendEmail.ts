"use server";
import { Resend } from "resend";

const sendEmail = async (email: string, message: string) => {
  console.log("process", process.env);
  const resend = new Resend("re_7LkerVyA_BsXCuAFUg6BUQkT5mMjszXFP");
  console.log("resend", resend);
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <updates@updates.mones.dev>",
      to: "mones.cse@gmail.com",
      subject: "Mail From Landing Page",
      reply_to: email,
      html: "<p>" + message + "</p>",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default sendEmail;
