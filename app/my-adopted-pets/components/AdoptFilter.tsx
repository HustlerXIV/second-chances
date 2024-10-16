"use client";

import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import animalBreeds from "@/data/animalBreeds";
import { Box, Divider, Input, Slider, Typography } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import { fetchAdoptPageData } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterInfo } from "@/app/store/features/petsSlice";

const FILTER_SELECT: any = [
  {
    key: "pet_status",
    label: "Pet Status",
    options: [
      { label: "Available", value: "available" },
      { label: "Adopted", value: "adopted" },
    ],
  },
  {
    key: "species",
    label: "Species",
    options: [
      { label: "Dogs", value: "dog" },
      { label: "Cats", value: "cat" },
      { label: "Rabbits", value: "rabbit" },
      { label: "Birds", value: "bird" },
    ],
  },
];

const AdoptFilter = () => {
  const dispatch = useDispatch();
  const filterInfo = useSelector((state: any) => state.pets.filterInfo);

  const handleChange = (key: string, event: SelectChangeEvent) => {
    dispatch(updateFilterInfo({ [key]: event.target.value }));
  };

  const selectedBreeds = filterInfo.species
    ? animalBreeds[filterInfo.species]
    : [];

  const handleSubmit = async () => {
    await fetchAdoptPageData();
  };

  useEffect(() => {
    fetchAdoptPageData();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center flex-wrap my-[48px]">
        <div className="flex gap-[16px] flex-wrap">
          {FILTER_SELECT.map((item: any) => {
            const { key, label, options } = item ?? {};
            return (
              <FormControl sx={{ minWidth: "200px" }} key={key}>
                <InputLabel>{label}</InputLabel>
                <Select
                  value={filterInfo[key]}
                  label={label}
                  onChange={(e) => handleChange(key, e)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {options.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          })}

          {filterInfo.species && (
            <FormControl sx={{ minWidth: "200px" }}>
              <InputLabel>Breed</InputLabel>
              <Select
                value={filterInfo.breed}
                label="Breed"
                onChange={(e) => handleChange("breed", e)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {selectedBreeds?.map((breed: any) => (
                  <MenuItem key={breed.value} value={breed.value}>
                    {breed.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Box sx={{ width: 250 }}>
            <Typography style={{ color: "#000" }}>Age (months)</Typography>
            <div className="flex gap-[8px]">
              <Slider
                value={filterInfo.age}
                onChange={(e: any) => handleChange("age", e)}
                aria-labelledby="input-slider"
              />
              <Input
                value={filterInfo.age}
                size="small"
                onChange={(e: any) => handleChange("age", e)}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 1000,
                  type: "number",
                }}
              />
            </div>
          </Box>
        </div>
        <CustomButton label="Search" onClick={() => handleSubmit()} />
      </div>
      <Divider />
    </>
  );
};

export default AdoptFilter;
