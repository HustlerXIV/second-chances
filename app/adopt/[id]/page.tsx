"use client";

import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { getPet } from "./action";
import Loader from "@/components/Loader";
import CustomButton from "@/components/CustomButton";
import { Divider } from "@mui/material";
import AlertDialog from "@/components/Dialog";
import animalBreeds from "@/data/animalBreeds";

interface PetByIDProps {
  params: {
    id: string;
  };
}

const PetByID: React.FC<PetByIDProps> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});
  const [contacted, setContacted] = useState<boolean>(false);
  const { id } = params;

  const updatePetsData = async () => {
    const pet = (await getPet(id)) ?? {};
    setData(pet);
    setLoading(false);
  };

  const { name, species, breed, age, description, photo_url } = data ?? {};

  const getBreedLabel = () => {
    const breedLabel = animalBreeds[species].find(
      (item: any) => item.value === breed
    );

    return breedLabel?.label;
  };

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
              onClick={() => setContacted(true)}
            />
          </div>
        </div>
      </Container>
      <AlertDialog
        title="Please contact admin"
        content="Please contact the admin in order to adopt a pet"
        onClose={() => setContacted(false)}
        isOpen={contacted}
        closeLabel="Close"
      />
    </>
  );
};

export default PetByID;
