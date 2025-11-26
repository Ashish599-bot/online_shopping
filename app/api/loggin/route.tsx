import knex from "knex";
import knexConfig from "@/knexfile";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const kn = knex(knexConfig.development);
const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
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

  return Response.json({
    message: "Login successful",
    token,
    user: { id: user.id, email: user.email },
  });
}
