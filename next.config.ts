import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "knex",
    "pg",
    "swiper@10",
    "jsonwebtoken",
    "bcryptjs",
    "dotenv",
    "nodemailer",
    "resend",
  ],
};

export default nextConfig;
