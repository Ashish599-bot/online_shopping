import knex from "knex";
import knexConfig from "@/knexfile";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendMail } from "@/email/route";
const kn = knex(knexConfig.development);
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_key";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return Response.json(
        { error: "Email & password required" },
        { status: 400 }
      );

    const user = await kn("users").where({ email }).first();
    if (!user)
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return Response.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    await sendMail(email);

    return Response.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
