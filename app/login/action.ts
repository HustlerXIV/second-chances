// import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  defaultSession,
  SessionData,
  sessionOptions,
} from "@/lib/ironSessionOptions";

import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { post } from "@/lib/api/axios";

export async function login(formData: any) {
  try {
    const response = await post("/login", { formData });

    const data: any = response.data;

    if (data.token) {
      const session: any = await getIronSession(
        formData,
        NextResponse.next(),
        sessionOptions
      );
      session.token = data.token;
      await session.save();

      console.log("Session data after saving:", session); // Log the session object

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
  } catch (error) {
    return NextResponse.json(
      { message: "Error during login" },
      { status: 500 }
    );
  }
}

// export async function GET(request: NextRequest) {
//   const session = await getIronSession<SessionData>(cookies(), sessionOptions);
//   const action = new URL(request.url).searchParams.get("action");
//   if (action === "logout") {
//     session.destroy();
//     return redirect("/");
//   }

//   if (session.isLoggedIn !== true) {
//     return Response.json(defaultSession);
//   }

//   return Response.json(session);
// }
