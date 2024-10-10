"use client";

import { updateFilterInfo } from "@/app/store/features/petsSlice";
import PetCard from "@/components/PetCard";
import { Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdoptPageData } from "../action";

const PetsList = () => {
  const dispatch = useDispatch();

  const handleChange = async (key: string, value: any) => {
    await fetchAdoptPageData();
    dispatch(updateFilterInfo({ [key]: value }));
  };

  const { allPets } = useSelector((state: any) => state.pets);

  const { pets = [], totalPages } = allPets ?? {};

  return (
    <>
      <div className="flex flex-wrap gap-[24px] justify-center my-[24px]">
        {pets.map((item: any) => {
          return (
            <div key={item.id}>
              <PetCard data={item} />;
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <Pagination
          count={totalPages}
          onChange={(e: any, value: any) => handleChange("page", value)}
        />
      </div>
    </>
  );
};

export default PetsList;
