"use client";

import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import CustomSelect from "@/components/inputs/CustomSelect";
import CustomTextField from "@/components/inputs/CustomTextField";
import animalBreeds from "@/data/animalBreeds";
import animalSpecies from "@/data/animalSpecies";
import React, { useEffect, useState } from "react";
import AlertDialog from "@/components/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { updateMyPetDialog } from "@/app/store/features/myPetSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { get } from "@/lib/api/axios";
import { FormControlLabel, Switch } from "@mui/material";

const EditPet = ({ params }: { params: { id: string } }) => {
  const [petInfo, setPetInfo] = useState<any>({
    name: "",
    species: "",
    breed: "",
    age: 0,
    description: "",
    photo_url: "",
    pet_status: "available",
  });

  const dispatch = useDispatch<any>();
  const { openDialog } = useSelector((state: any) => state.myPet);
  const router: any = useRouter();
  const { id } = params ?? {};

  const handleChange = (key: string, value: string) => {
    setPetInfo((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const selectedBreeds = petInfo.species ? animalBreeds[petInfo.species] : [];

  const getSpecieLabel = (value: string) => {
    const specieLabel = animalSpecies[1].options.find(
      (item: any) => item.value === value
    );

    setPetInfo((prev: any) => ({
      ...prev,
      species: specieLabel?.value,
    }));
    return specieLabel?.label;
  };

  const getBreedLabel = (specie: string, breed: string) => {
    const breedLabel = animalBreeds[specie].find(
      (item: any) => item.value === breed
    );
    setPetInfo((prev: any) => ({
      ...prev,
      breed: breedLabel?.value,
    }));

    return breedLabel?.label;
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`/api/pet/edit/${id}`, petInfo);
      router.push(`/adopt/${id}`);
    } catch (error: any) {
      console.error("Update failed:", error);
    }
  };

  const getPet = async (petId: string) => {
    try {
      const reponse: any = await get(`pets/${petId}`);
      setPetInfo(reponse.data);
      getSpecieLabel(reponse.data.species);
      getBreedLabel(reponse.data.species, reponse.data.breed);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    getPet(id);
  }, []);

  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <div className="bg-white w-full max-w-[800px] rounded-2xl p-8 text-black gap-2 flex flex-col shadow-lg my-10">
          <span className="text-[30px] text-black font-bold text-center">
            EDIT YOUR PET
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
              value={petInfo.species}
            />
            <CustomSelect
              label="Breed"
              design="black"
              onChange={(value: string) => handleChange("breed", value)}
              options={selectedBreeds}
              value={petInfo.breed}
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
            <FormControlLabel
              control={
                <Switch
                  checked={petInfo.pet_status === "available"}
                  onChange={(e: any) =>
                    handleChange(
                      "pet_status",
                      e.target.checked ? "available" : "not_available"
                    )
                  }
                  name="pet_status"
                />
              }
              label={
                petInfo.pet_status === "available"
                  ? "Available"
                  : "Not Available"
              }
            />
            <CustomButton
              label="EDIT"
              design="containedBlack"
              onClick={() => handleSubmit()}
            />
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

export default EditPet;
