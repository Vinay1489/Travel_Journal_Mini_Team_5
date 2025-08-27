
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, AVATAR_FALLBACK_URL } from "../config";

// Create the User Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultPic = `${API_BASE_URL}/uploads/users/default.jpg` || AVATAR_FALLBACK_URL;

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/v1/users/me`, {
          withCredentials: true,
        });
        if (res.data.status === "Success") {
          setUser(res.data.data); // assuming the user data is in res.data.data
          setIsLoggedIn(true);
        }
      } catch (err) {
        setIsLoggedIn(false);
        setUser(null);
        if (err.response && err.response.status !== 401) {
          console.error("Request failed:", err);
        }
      }
    };

    fetchUser();
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user,setUser, isLoggedIn,setIsLoggedIn, defaultPic }}>
      {children}
    </UserContext.Provider>
  );
};
