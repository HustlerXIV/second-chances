import React from "react";
import Container from "@/components/Container";
import AdoptFilter from "./components/AdoptFilter";
import PetsList from "./components/PetsList";

const Adopt = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container>
        <AdoptFilter />
        <PetsList />
      </Container>
    </div>
  );
};

export default Adopt;
