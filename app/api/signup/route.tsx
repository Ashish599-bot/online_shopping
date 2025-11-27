import knex from "knex";
import knexConfig from "@/knexfile";
import bcrypt from "bcryptjs";

const kn = knex(knexConfig.development);

export async function POST(req: Request) {
  try {
    const { email, password, user_name } = await req.json();

    if (!email || !password || !user_name) {
      return Response.json(
        { error: "Email, password, and user name required" },
        { status: 400 }
      );
    }
    const existingUser = await kn("users").where({ email }).first();
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const [newUser] = await kn("users")
      .insert({ email, password: hashedPassword, user_name })
      .returning(["id", "email", "user_name"]);

    return Response.json({
      message: "Signup successful",
      user: newUser,
    });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
