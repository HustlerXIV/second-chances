"use client";

import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { getPet } from "./action";
import Loader from "@/components/Loader";
import CustomButton from "@/components/CustomButton";
import { Divider } from "@mui/material";
import AlertDialog from "@/components/Dialog";
import animalBreeds from "@/data/animalBreeds";
import axios from "axios";

interface PetByIDProps {
  params: {
    id: string;
  };
}

const PetByID: React.FC<PetByIDProps> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});
  const [contacted, setContacted] = useState<boolean>(false);
  const [adopted, setAdopted] = useState<boolean>(false);
  const { id } = params;

  const updatePetsData = async () => {
    const pet = (await getPet(id)) ?? {};
    setData(pet);
    setLoading(false);
  };

  const adoptPet = async () => {
    try {
      await axios.put(`/api/pet/adopt/${id}`);
      setContacted(false);
      setAdopted(true);
      updatePetsData();
    } catch (error: any) {
      console.error("Update failed:", error);
    }
  };

  const { name, species, breed, age, description, photo_url, pet_status } =
    data ?? {};

  const getBreedLabel = () => {
    const breedLabel = animalBreeds?.[species]?.find(
      (item: any) => item.value === breed
    );

    return breedLabel?.label;
  };

  const isPetAvailable = pet_status === "available";

  useEffect(() => {
    updatePetsData();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <div className="flex items-center flex-col gap-8 py-[60px]">
          <div
            className="relative w-[400px] h-[400px] bg-cover bg-center rounded-2xl border border-gray-300 shadow-lg"
            style={{
              backgroundImage: `url(${photo_url})`,
            }}
          ></div>
          <div
            className={`${
              isPetAvailable ? "bg-green" : "bg-red"
            } w-[100px] text-center p-2 rounded-lg`}
          >
            {isPetAvailable ? "Available" : "Unavailable"}
          </div>
          <div className="bg-white w-full max-w-[800px] rounded-2xl p-8 text-black gap-2 flex flex-col shadow-lg">
            <div className="flex gap-[10px] flex-wrap">
              <div className="w-[140px]">
                <b>Name:</b>
              </div>
              {name}
            </div>
            <Divider />
            <div className="flex gap-[10px] flex-wrap">
              <div className="w-[140px]">
                <b>Age:</b>
              </div>
              {age}
            </div>
            <Divider />
            <div className="flex gap-[10px] flex-wrap">
              <div className="w-[140px]">
                <b>Breed:</b>
              </div>
              {getBreedLabel()}
            </div>
            <Divider />
            <div className="flex gap-[10px] flex-wrap">
              <div className="w-[140px]">
                <b>Description:</b>
              </div>
              {description}
            </div>
          </div>
          <div>
            <CustomButton
              label="Adopt Now!"
              sx={{ padding: "8px 24px" }}
              design="containedYellow"
              disabled={!isPetAvailable}
              onClick={() => setContacted(true)}
            />
          </div>
        </div>
      </Container>
      <AlertDialog
        title="Adopt this pet"
        content="Do you want to adopt this pet?"
        onClose={() => setContacted(false)}
        isOpen={contacted}
        closeLabel="Cancel"
        confirmLabel="Adopt"
        onConfirm={() => adoptPet()}
      />
      <AlertDialog
        title="You're very kind"
        content="Thank you for adopting this pet!"
        onClose={() => setAdopted(false)}
        isOpen={adopted}
        closeLabel="Close"
      />
    </>
  );
};

export default PetByID;
