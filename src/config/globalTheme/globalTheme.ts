import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});