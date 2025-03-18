"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosInstance";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get("/auth/me");
                setUser(response.data); 
            } catch (error) {
                console.error("Error fetching user info:", error);
            } finally {
                setLoading(false);
            }
        };

        if (window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
            fetchUserInfo();
        } else {
            setLoading(false);
        }
       
    }, []);

    const setUserState = (user) => {
        setUser(user);
    };
    return (
        <UserContext.Provider value={{ user, isLoading, setUserState }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
