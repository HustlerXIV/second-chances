import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/ironSessionOptions";
import { post } from "@/lib/api/axios";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const response = await post("users/login", { username, password });

    const data: any = response.data;

    if (data.token) {
      const session: any = await getIronSession(
        req,
        NextResponse.next(),
        sessionOptions
      );
      session.token = data.token;
      await session.save();

      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Error during login", error: error.message || error },
      { status: 500 }
    );
  }
}
