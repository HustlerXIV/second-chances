"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import { fetchHomePageData } from "../action";
import Loader from "@/components/Loader";
import PetCard from "@/components/PetCard";

const HOME_TITLE = "PET AVAILABLE FOR ADOPTION";

type ButtonListTypes = {
  label: string;
  value: string;
};

const BUTTON_LIST: ButtonListTypes[] = [
  { label: "DOGS", value: "dog" },
  { label: "CATS", value: "cat" },
  { label: "RABBITS", value: "rabbit" },
  { label: "BRIDS", value: "brid" },
];

const HomeModule = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentBtn, setCurrentBtn] = useState<string>(BUTTON_LIST[0].value);
  const [data, setData] = useState<any>([]);

  const handleOnClick = (value: string) => {
    setCurrentBtn(value);
  };

  const updatePetsData = async () => {
    const { pets } = (await fetchHomePageData(currentBtn)) ?? {};
    setData(pets);
    setLoading(false);
  };

  useEffect(() => {
    updatePetsData();
  }, [currentBtn]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Banner />
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "40px",
          margin: "40px auto",
        }}
      >
        <div className="flex items-center flex-col gap-[20px]">
          <div
            className="text-black font-bold"
            style={{ fontSize: "24px", lineHeight: "24px" }}
          >
            {HOME_TITLE}
          </div>
          <div className="flex gap-[12px]">
            {BUTTON_LIST.map((item: ButtonListTypes) => {
              return (
                <div key={item.value}>
                  <CustomButton
                    label={item.label}
                    onClick={() => handleOnClick(item.value)}
                    design={
                      item.value === currentBtn
                        ? "containedBlack"
                        : "outlineBlack"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        {data.map((item: any) => {
          return (
            <div key={item.id}>
              <PetCard data={item} />;
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default HomeModule;
