import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface CustomSelectProps {
  label: string;
  design?: string;
  onChange: (value: string) => void;
  options: any[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  design = "normal",
  onChange,
  options = [],
}) => {
  const handleChange = (value: string) => {
    onChange(value);
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
    <div>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel
          shrink
          sx={{
            color: theme.labelColor, // Label color (won't change on focus)
          }}
        >
          {label}
        </InputLabel>
        <Select
          onChange={(e) => handleChange(e.target.value)}
          sx={{
            "& .MuiInputBase-input": {
              color: theme.inputColor,
              background: theme.backgroundColor,
              paddingLeft: "8px",
            },
            "& .MuiInputBase-root:before": {
              borderBottom: `1px solid ${theme.inputColor}`, // Default underline color
            },
            "& .MuiInputBase-root:after": {
              borderBottom: `2px solid ${theme.focusColor}`, // Focus underline color
            },
            "&:hover .MuiInputBase-root:before": {
              borderBottom: `1px solid ${theme.focusColor}`, // Hover underline color
            },
          }}
        >
          {options.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
