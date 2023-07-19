import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import { AuthContextProvider } from "./Components/Contexts/AuthProvider";
import { AlertContextProvider } from "./Components/Contexts/AlertProvider";
import MyAlert from "./Components/Alert";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <AuthContextProvider>
      <AlertContextProvider>
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
      </AlertContextProvider>
    </AuthContextProvider>
  );
};

export default App;
