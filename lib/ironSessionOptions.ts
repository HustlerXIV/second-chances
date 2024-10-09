import { SessionOptions } from "iron-session";

export interface SessionData {
  username: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  cookieName: "second-chances",
  password:
    process.env.NEXT_PUBLIC_SESSION_SECRET ||
    "complex_password_at_least_32_characters_long",
  cookieOptions: {
    secure: false,
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
};
