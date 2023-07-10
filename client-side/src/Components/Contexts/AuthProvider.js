import axios from "axios";
import React, { useEffect } from "react";
import { useState, createContext } from "react";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("authTokenForChat") || null
  );
  const [trigger, setTrigger] = useState(false);
  const refreshUser = () => {
    setTrigger(!trigger);
  };
  const userIsLoggedIn = token !== null;

  const loginHandler = (token) => {
    localStorage.setItem("authTokenForChat", token);
    setToken(token);
  };
  const logoutHandler = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authTokenForChat");
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7271/api/identification",
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );
        const user = response.data;
        setUser(user);
        console.log(user);
      } catch (error) {
        console.error(error);
        setUser(null);
        setToken(null);
        localStorage.removeItem("authTokenForChat");
      }
    };
    if (token) {
      fetchUser();
    } else {
      setUser(null);
    }
  }, [token, trigger]);
  const valueContext = {
    token: token,
    user: user,
    isLoggedIn: userIsLoggedIn,
    refreshUser: refreshUser,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
