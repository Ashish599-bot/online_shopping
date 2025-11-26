import knex from "knex";
import knexConfig from "@/knexfile";
import bcrypt from "bcryptjs";

const kn = knex(knexConfig.development);

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password)
    return Response.json(
      { error: "Email & password required" },
      { status: 400 }
    );
  const existingUser = await kn("users").where({ email }).first();
  if (existingUser)
    return Response.json({ error: "User already exists" }, { status: 400 });
  const hashedPassword = await bcrypt.hash(password, 10);
  const [id] = await kn("users").insert({
    email,
    password: hashedPassword,
  });

  return Response.json({
    message: "User created successfully",
    userId: id,
  });
}
