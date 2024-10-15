import { remove } from "@/lib/api/axios";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const sessionToken = req.cookies.get("second-chance-token");
  const { searchParams } = new URL(req.url);
  const petId = searchParams.get("id");

  if (!sessionToken) {
    return NextResponse.json(
      { error: "Session token not found" },
      { status: 401 }
    );
  }

  try {
    const response = await remove(`pets/${petId}`, {
      headers: {
        Authorization: `Bearer ${sessionToken.value}`,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching:", error);

    return NextResponse.json(
      { error: "Failed to remove pet", details: error.message },
      { status: 500 }
    );
  }
}
