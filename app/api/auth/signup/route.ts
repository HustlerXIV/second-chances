import { post } from "@/lib/api/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { confirmPassword, ...userInfo } = await req.json();

  try {
    await post("users", userInfo);
    return NextResponse.json({ message: "Created User!" }, { status: 200 });
  } catch {}
  return NextResponse.json(
    { message: "Can not create a user" },
    { status: 500 }
  );
}
