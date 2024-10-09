"use client";

import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import { AccountCircle } from "@mui/icons-material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginModule = () => {
  const [userInfo, setUserInfo] = useState<{
    username?: string;
    password?: string;
  }>({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (key: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/auth/login", userInfo);

      if (res.status === 200) {
        router.push("/");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container>
      <div className="min-h-screen pt-[15%]">
        <div className="bg-customYellow py-[80px] px-[40px] rounded-[24px] flex flex-col gap-[30px] w-full max-w-[600px] mx-auto">
          <span className="text-[50px] text-black font-bold text-center">
            SIGN IN
          </span>
          <div className="flex flex-col gap-[20px]">
            <TextField
              label="Username"
              variant="standard"
              value={userInfo.username}
              onChange={(e) => handleChange("username", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              value={userInfo.password}
              onChange={(e) => handleChange("password", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex gap-[20px] justify-center">
            <CustomButton
              label="Sign In"
              variant="contained"
              design="containedBlack"
              onClick={handleSubmit} // Call handleSubmit directly
            />
            <CustomButton
              label="Create Account"
              design="outlineBlack"
              onClick={() => router.push("/sign-up")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginModule;
