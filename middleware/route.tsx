import jwt from "jsonwebtoken";

export function verifyToken(req: Request) {
  const auth = req.headers.get("Authorization");
  if (!auth) return null;

  const token = auth.split(" ")[1];

  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
}
export const config = {
  matcher: [
    "/shop featured",
    "/browse categories",
    "/clothing",
    "/electronics",
    "/furniture",
    "/home & living",
  ],
};
