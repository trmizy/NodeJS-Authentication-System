import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,          // ép dùng 587
  secure: false,      // false = STARTTLS (TLS)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // App Password 16 ký tự từ Google
  },
});

// Test connection khi khởi động
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP server ready to take messages ✅");
  }
});
