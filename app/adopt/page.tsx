import React from "react";
import Container from "@/components/Container";
import AdoptFilter from "./components/AdoptFilter";
import PetsList from "./components/PetsList";

const Adopt = () => {
  return (
    <>
      <Container>
        <AdoptFilter />
        <PetsList />
      </Container>
    </>
  );
};

export default Adopt;
