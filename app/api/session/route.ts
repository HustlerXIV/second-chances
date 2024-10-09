import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const sessionToken = req.cookies.get("second-chance-token");

  if (!sessionToken) {
    return NextResponse.json({ isLoggedIn: false }, { status: 403 });
  }

  return NextResponse.json({ isLoggedIn: true }, { status: 200 });
}
