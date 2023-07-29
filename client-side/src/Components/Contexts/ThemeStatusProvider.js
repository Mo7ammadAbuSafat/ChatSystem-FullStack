import React, { createContext, useEffect, useState } from "react";

export const ThemeStatusContext = createContext("");

const ThemeStatusContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedValue = localStorage.getItem("isDarkTheme");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

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
