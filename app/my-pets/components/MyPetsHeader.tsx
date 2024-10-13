"use client";

import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const MyPetsHeader = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/my-pets/create");
  };
  return (
    <Container>
      <div className="w-full flex justify-start py-[20px]">
        <CustomButton
          label="CREATE PET"
          design="containedYellow"
          onClick={() => handleOnClick()}
        />
      </div>
      <Divider />
    </Container>
  );
};

export default MyPetsHeader;
