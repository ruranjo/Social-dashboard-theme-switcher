import { createTheme } from "@mui/material";
import { darkBg, darkCardBg, darkTopBgPattern, lightBg, lightCardBg, lightTopBgPattern } from "../../styles/variables";


export const lightTheme = createTheme({
  palette: {
    background: {
      default: lightBg,
    },
    text: {
      primary: '#000000',
    },
    primary: {
      main: lightTopBgPattern,
    },
    secondary: {
      main: 'hsl(356, 69%, 56%)',
    },
    info:{
      main: lightCardBg, //card
    }

    },
  },
);

export const darkTheme = createTheme({
  palette: {
    background: {
      default: darkBg,
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: darkTopBgPattern,
    },
    secondary: {
      main: 'hsl(356, 69%, 56%)',
    },
    info:{
      main: darkCardBg, //card
    }
    
  },
});