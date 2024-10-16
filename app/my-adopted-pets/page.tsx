import React from "react";
import Container from "@/components/Container";
import PetsList from "./components/PetsList";

const Adopt = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container>
        <div className="text-customYellow font-bold flex justify-center text-[30px] pt-6">
          ADOPTED PETS
        </div>
        <PetsList />
      </Container>
    </div>
  );
};

export default Adopt;
