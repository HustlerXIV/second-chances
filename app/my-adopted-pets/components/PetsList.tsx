"use client";

import PetCard from "@/components/PetCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PetsList = () => {
  const [data, setData] = useState([]);

  const getAllAdoptedPets = async () => {
    const allPets: any = await axios.get("/api/pet/allAdoptedPets");
    setData(allPets.data);
  };

  useEffect(() => {
    getAllAdoptedPets();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-[24px] justify-center my-[24px]">
        {data?.map((item: any) => {
          return (
            <div key={item.id}>
              <PetCard data={item} />;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PetsList;
