import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages"
import ErrorPage from "./pages/ErrorPage";
import { FormProvider } from "./context/FormContext";
import HaircutForm from "./pages/HaircutForm";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

//to handle the font changes I will give in and create a theme
let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        "Montserrat", 
        "sans-serif"
      ].join(",")
    },
  },
})

//to make fonts auto responsive
theme = responsiveFontSizes(theme);

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          } />
          <Route path="/bookHaircut" element={
            <ThemeProvider theme={theme}>    
              <FormProvider>
                <HaircutForm />
              </FormProvider>
            </ThemeProvider>
          } />
          <Route path="*" element={
          <ThemeProvider theme={theme}>
            <ErrorPage />
          </ThemeProvider>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
