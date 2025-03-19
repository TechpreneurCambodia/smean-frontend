"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosInstance";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const fetchUserInfo = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get("/auth/me");
            setUser(response.data);
            console.log("response", response);
        } catch (error) {
            console.error("Error fetching user info:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {


        if (window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
            fetchUserInfo();
            console.log("fetching user info");
            console.log("user", user);
        } else {
            setLoading(false);
        }

    }, []);

    const setUserState = (user) => {
        setUser(user);
    };
    return (
        <UserContext.Provider value={{ user, isLoading, setUserState, fetchUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
