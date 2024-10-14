import { TextField } from "@mui/material";
import React from "react";

interface WhiteTextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  design?: string;
}

const CustomTextField: React.FC<WhiteTextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  design = "normarl",
  type,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const THEME_SET = {
    normal: {
      labelColor: "white",
      inputColor: "black",
      backgroundColor: "white",
      focusColor: "#FFCC01",
    },
    black: {
      labelColor: "black",
      inputColor: "black",
      backgroundColor: "white",
      focusColor: "#FFCC01",
    },
  };

  const theme = THEME_SET[design as keyof typeof THEME_SET] || THEME_SET.normal;

  return (
    <TextField
      label={label}
      variant="standard"
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        "& .MuiInputLabel-root": { color: theme.labelColor },
        "& .MuiInputBase-input": {
          color: theme.inputColor,
          background: theme.backgroundColor,
          paddingLeft: "8px",
        },
        "& .MuiInputBase-input::placeholder": {
          color: theme.inputColor,
          opacity: 1,
        },
        "& .MuiInputBase-root:before": {
          borderBottom: `1px solid ${theme.inputColor}`,
        },
        "& .MuiInputBase-root:after": {
          borderBottom: `2px solid ${theme.focusColor}`,
        },
        "&:hover .MuiInputBase-root:before": {
          borderBottom: `1px solid ${theme.focusColor}`,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.labelColor,
        },
      }}
    />
  );
};

export default CustomTextField;
