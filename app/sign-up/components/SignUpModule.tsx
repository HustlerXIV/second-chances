"use client";

import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import AlertDialog from "@/components/Dialog";
import CustomTextField from "@/components/inputs/CustomTextField";
import axios from "axios";
import React, { useState } from "react";

const SignUpModule = () => {
  const [userInfo, setUserInfo] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [dialog, setDialog] = useState<boolean>(false);

  const handleChange = (key: string, value: string) => {
    setUserInfo((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/auth/signup", userInfo);
      setDialog(true);
    } catch (error: any) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Container>
        <div className="py-[40px]">
          <div className="bg-black py-[40px] px-[40px] rounded-[24px] flex flex-col gap-[30px] w-full max-w-[600px] mx-auto">
            <span className="text-[50px] text-customYellow font-bold text-center">
              Create Account
            </span>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[16px] text-customYellow font-bold">
                Personal Information
              </span>
              <CustomTextField
                label="First Name"
                value={userInfo.firstname}
                onChange={(value: any) => handleChange("firstname", value)}
              />
              <CustomTextField
                label="Last Name"
                value={userInfo.lastname}
                onChange={(value: any) => handleChange("lastname", value)}
              />
              <CustomTextField
                label="Email"
                value={userInfo.email}
                onChange={(value: any) => handleChange("email", value)}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className="text-[16px] text-customYellow font-bold">
                User Information
              </span>
              <CustomTextField
                label="Username"
                value={userInfo.username}
                onChange={(value: any) => handleChange("username", value)}
              />
              <CustomTextField
                label="Password"
                value={userInfo.password}
                onChange={(value: any) => handleChange("password", value)}
                type="password"
              />
              <CustomTextField
                label="Confirm Password"
                value={userInfo.confirmPassword}
                onChange={(value: any) =>
                  handleChange("confirmPassword", value)
                }
                type="password"
              />
            </div>
            <div className="flex gap-[20px] justify-center">
              <CustomButton
                label="Submit"
                variant="contained"
                design="containedYellow"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </Container>
      <AlertDialog
        title="Account Created Successfully!"
        content="Congratulations! You're now part of our community. We're excited to have you with us."
        onClose={() => setDialog}
        isOpen={dialog}
        closeLabel="Close"
      />
    </>
  );
};

export default SignUpModule;
