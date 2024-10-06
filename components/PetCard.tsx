import { IconButton } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PetCardProps {
  data: {
    id: number;
    name: string;
    age: string;
    photo_url: string;
  };
}

const PetCard: React.FC<PetCardProps> = ({ data }) => {
  console.log("1", data);

  const {
    id = 0,
    name = "Nathalie",
    age = "8 Months",
    photo_url = "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
  } = data ?? {};

  return (
    <div className="flex flex-col gap-[8px] w-[250px]">
      <div
        className="relative w-[250px] h-[250px] bg-cover bg-center rounded-2xl border border-gray-300"
        style={{
          backgroundImage: `url(${photo_url})`,
        }}
      ></div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-darkestGray font-bold truncate">
            Name: {name}
          </div>
          <div className="text-normalGray truncate">Age: {age}</div>
        </div>
        <div>
          <IconButton className="bg-lightGray">
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
