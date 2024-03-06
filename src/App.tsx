import { useState } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './config/globalTheme/globalTheme';
import { Content } from './components';





function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Content toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </ThemeProvider>
  );
}

export default App
