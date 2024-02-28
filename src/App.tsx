import { useState } from 'react'
import './App.css'
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './config/globalTheme/globalTheme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button onClick={() => toggleDarkMode()}>Toggle Dark Mode</Button>
      {/* Contenido de tu aplicación */}
      hola
    </ThemeProvider>
  );
}

export default App
