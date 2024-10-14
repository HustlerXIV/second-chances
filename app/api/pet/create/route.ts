import { post } from "@/lib/api/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const sessionToken = req.cookies.get("second-chance-token");
  const petInfo = await req.json();

  if (!sessionToken) {
    return NextResponse.json(
      { error: "Session token not found" },
      { status: 401 }
    );
  }

  try {
    const response = await post("pets", petInfo, {
      headers: {
        Authorization: `Bearer ${sessionToken.value}`,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching:", error);

    return NextResponse.json(
      { error: "Failed to create pet", details: error.message },
      { status: 500 }
    );
  }
}
