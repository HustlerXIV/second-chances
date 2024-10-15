import { get } from "@/lib/api/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const sessionToken = req.cookies.get("second-chance-token");

  if (!sessionToken) {
    return NextResponse.json(
      { error: "Session token not found" },
      { status: 401 }
    );
  }

  try {
    const response: any = await get("pets/all-my-pets", {
      headers: {
        Authorization: `Bearer ${sessionToken.value}`,
      },
    });

    return NextResponse.json(response.data.data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching:", error);

    return NextResponse.json(
      { error: "Failed to get pet", details: error.message },
      { status: 500 }
    );
  }
}
