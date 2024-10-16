import React from "react";
import MyPetsHeader from "./components/MyPetsHeader";
import MyPetsModule from "./components/MyPetsModule";

const MyPets = () => {
  return (
    <>
      <MyPetsHeader />
      <div style={{ minHeight: "100vh" }}>
        <MyPetsModule />
      </div>
    </>
  );
};

export default MyPets;
