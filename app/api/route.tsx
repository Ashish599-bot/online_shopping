import knex from "knex";
import knexConfig from "@/knexfile";

const kn = knex(knexConfig.development);

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json(
      { error: "Email and password are requires" },
      { status: 400 }
    );
  }

  const [createDate] = await kn("logins")
    .insert({ email, password })
    .returning("*");

  return Response.json(
    { message: "Created successfully", createDate },
    { status: 201 }
  );
}
