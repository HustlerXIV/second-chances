import { SessionOptions } from "iron-session";

export interface SessionData {
  username: string;
  password: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: "",
  password: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  cookieName: "second-chances",
  password: process.env.NEXT_PUBLIC_SESSION_SECRET || "",
  cookieOptions: {
    secure: false,
  },
};
