"use client";

import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomTextField from "@/components/inputs/CustomTextField";
import animalBreeds from "@/data/animalBreeds";
import animalSpecies from "@/data/animalSpecies";
import React, { useState } from "react";
import AlertDialog from "@/components/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { updateMyPetDialog } from "@/app/store/features/myPetSlice";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreatePet = () => {
  const [petInfo, setPetInfo] = useState<any>({
    name: "",
    species: "",
    breed: "",
    age: 0,
    description: "",
    photo_url: "",
  });

  const dispatch = useDispatch<any>();
  const { openDialog } = useSelector((state: any) => state.myPet);
  const router = useRouter();

  const handleChange = (key: string, value: string) => {
    setPetInfo((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/pet/create", petInfo);
      dispatch(updateMyPetDialog(true));
    } catch (error: any) {
      console.error("Login failed:", error);
    }
  };

  const selectedBreeds = petInfo.species ? animalBreeds[petInfo.species] : [];

  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <div className="bg-white w-full max-w-[800px] rounded-2xl p-8 text-black gap-2 flex flex-col shadow-lg my-10">
          <span className="text-[30px] text-black font-bold text-center">
            POST YOUR PET
          </span>
          <div className="flex flex-col gap-[20px]">
            <CustomTextField
              label="Pet's Name"
              design="black"
              value={petInfo?.name}
              onChange={(value: string) => handleChange("name", value)}
            />
            <CustomSelect
              label="Specie"
              design="black"
              onChange={(value: string) => handleChange("species", value)}
              options={animalSpecies[1].options}
            />
            <CustomSelect
              label="Breed"
              design="black"
              onChange={(value: string) => handleChange("breed", value)}
              options={selectedBreeds}
            />
            <CustomTextField
              label="Age (months)"
              design="black"
              type="number"
              value={petInfo?.age}
              onChange={(value: string) => handleChange("age", value)}
            />
            <CustomTextField
              label="Short Description"
              design="black"
              value={petInfo?.description}
              onChange={(value: string) => handleChange("description", value)}
            />
            <CustomTextField
              label="Photo URL"
              design="black"
              value={petInfo?.photo_url}
              onChange={(value: string) => handleChange("photo_url", value)}
            />
            <CustomButton label="CREATE" onClick={() => handleSubmit()} />
          </div>
        </div>
      </Container>
      <AlertDialog
        title="Pet Created Successfully!"
        content="Thank you for trusting us!"
        onClose={() => dispatch(updateMyPetDialog(false))}
        isOpen={openDialog}
        confirmLabel="Confirm"
        onConfirm={() => router.push("/my-pets")}
      />
    </>
  );
};

export default CreatePet;
