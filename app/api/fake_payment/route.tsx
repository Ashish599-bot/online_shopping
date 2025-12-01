import { NextResponse } from "next/server";

export async function POST() {
  await new Promise((res) => setTimeout(res));
  const isSuccess = Math.random() > 0.2;
  return NextResponse.json({
    status: isSuccess ? "success" : "failed",
    transactionId: crypto.randomUUID(),
  });
}
