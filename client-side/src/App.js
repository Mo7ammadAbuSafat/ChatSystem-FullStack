import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import MyAlert from "./Components/Alert";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { ThemeStatusContext } from "./Components/Contexts/ThemeStatusProvider";
import { darkTheme, lightTheme } from "./Components/Themes";

const App = () => {
  const { isDarkTheme } = useContext(ThemeStatusContext);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
      <MyAlert />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
