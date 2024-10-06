import { CircularProgress } from "@mui/material";
import React from "react";

const loaderStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const Loader: React.FC = () => {
  return (
    <div style={loaderStyle}>
      <CircularProgress size={30} />
    </div>
  );
};

export default Loader;
