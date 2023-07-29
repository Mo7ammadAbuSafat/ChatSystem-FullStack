import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./Components/Contexts/AuthProvider";
import { AlertContextProvider } from "./Components/Contexts/AlertProvider";
import ThemeStatusContextProvider from "./Components/Contexts/ThemeStatusProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <AlertContextProvider>
      <ThemeStatusContextProvider>
        <App />
      </ThemeStatusContextProvider>
    </AlertContextProvider>
  </AuthContextProvider>
);
