import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail(to: string) {
  try {
    await transporter.sendMail({
      from: `"Nivor online shopping" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Login Alert",
      text: "You have successfully logged in!",
      html: "<p>You have successfully logged in!</p>",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}
