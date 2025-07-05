import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API } from "../utils/ApiRoute";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  // Called when login is submitted
  const login = async ({ email, password }) => {
    try {
      const res = await axios.post(`${API}users/login`, {
        email,
        password,
      });
      const newToken = res?.data?.token;
      if (newToken) {
        console.log("token", newToken);
        setToken(newToken);
        localStorage.setItem("token", newToken);
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      throw err;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    if(!token) return
    console.log("this is token auth context",token)
    const res = await axios.get(`${API}users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    setUser(res?.data?.user);
  };

  useEffect(()=>{
    if(token){
      getProfile()
    }
  },[token])

  return (
    <AuthContext.Provider value={{ token, user, login, logout, getProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
