"use client";

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {}

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#EDEEE9",
    },
  },
});
