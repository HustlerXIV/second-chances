import { NextRequest, NextResponse } from "next/server";
import { post } from "@/lib/api/axios";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const response = await post("users/login", { username, password });

  const user: any = response.data;

  if (user) {
    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set("second-chance-token", user.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
