import { Button, ButtonProps } from "@mui/material";
import React from "react";

const STYLES = {
  normal: {
    background: "#FFCC01",
    color: "#FFF",
  },
  outlineBlack: {
    background: "transparent",
    color: "#000",
    border: "1px solid #000",
    fontWeight: "bold",
  },
  containedBlack: {
    background: "#000",
    color: "#FFF",
    border: "1px solid #000",
    fontWeight: "bold",
  },
  outlineYellow: {
    background: "transparent",
    color: "#FFCC01",
    border: "1px solid #FFCC01",
    fontWeight: "bold",
  },
  containedYellow: {
    background: "#FFCC01",
    color: "#000",
    border: "1px solid #FFCC01",
    fontWeight: "bold",
  },
};

interface CustomButtonProps extends ButtonProps {
  design?: keyof typeof STYLES;
  label: string;
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  design = "normal",
  sx,
  label,
  href,
  onClick,
}) => {
  const baseSx = { ...sx, ...STYLES[design] };

  return (
    <Button sx={baseSx} variant={variant} href={href} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
