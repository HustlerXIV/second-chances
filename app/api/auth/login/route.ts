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

// export async function POST(req: NextRequest) {
//   try {
//     const { username, password } = await req.json();

//     const response = await post("users/login", { username, password });

//     const data: any = response.data;

//     if (data.token) {
//       const res: any = NextResponse.next();
//       const session: any = await getIronSession(req, res, sessionOptions);
//       session.user = data.user;
//       session.token = data.token;
//       // Debugging: Check the session object before saving
//       console.log("Session before save:", session);

//       try {
//         await session.save();
//       } catch (error) {
//         console.error("Error saving session:", error);
//       }

//       // Debugging: Check the session object after saving
//       console.log("Session after save:", session);

//       return NextResponse.json(
//         { message: "Login successful" },
//         { status: 200 }
//       );
//     } else {
//       return NextResponse.json(
//         { message: "Invalid credentials" },
//         { status: 401 }
//       );
//     }
//   } catch (error: any) {
//     console.error("Login error:", error);
//     return NextResponse.json(
//       { message: "Error during login", error: error.message || error },
//       { status: 500 }
//     );
//   }
// }
