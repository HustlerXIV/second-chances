"use client";

import Container from "@/components/Container";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomTextField from "@/components/inputs/CustomTextField";
import animalBreeds from "@/data/animalBreeds";
import animalSpecies from "@/data/animalSpecies";
import React, { useState } from "react";

const CreatePet = () => {
  const [petInfo, setPetInfo] = useState<any>({
    name: "",
    species: "",
    breed: "",
    age: 0,
    description: "",
    photo_url: "",
  });

  const handleChange = (key: string, value: string) => {
    setPetInfo((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   try {
  //     await axios.post("/api/auth/signup", userInfo);
  //     setDialog(true);
  //   } catch (error: any) {
  //     console.error("Login failed:", error);
  //   }
  // };

  const selectedBreeds = petInfo.species ? animalBreeds[petInfo.species] : [];

  return (
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
            label="Pet's Name"
            design="black"
            value={petInfo?.name}
            onChange={(value: string) => handleChange("firstname", value)}
          />
          <CustomTextField
            label="Pet's Name"
            design="black"
            value={petInfo?.name}
            onChange={(value: string) => handleChange("firstname", value)}
          />
        </div>
      </div>
    </Container>
  );
};

export default CreatePet;
