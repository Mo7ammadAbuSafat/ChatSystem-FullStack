import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthProvider";
import axios from "axios";

export const ThemeStatusContext = createContext("");

const ThemeStatusContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedValue = localStorage.getItem("isDarkTheme");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const update = async () => {
      if (user.isDarkTheme !== isDarkTheme) {
        try {
          await axios.put(
            `https://localhost:7271/api/users/${user.id}/dark-mode?isDarkMode=${isDarkTheme}`,
            {},
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
              },
            }
          );
          localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
        } catch (error) {
          alert(error);
        }
      }
    };
    if (user) {
      update();
    }
  }, [isDarkTheme]);

  useEffect(() => {
    if (user) {
      setIsDarkTheme(user.isDarkTheme);
      localStorage.setItem("isDarkTheme", JSON.stringify(user.isDarkTheme));
    }
  }, [user]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeStatusContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeStatusContext.Provider>
  );
};

export default ThemeStatusContextProvider;
