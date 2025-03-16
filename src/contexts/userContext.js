"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosInstance";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = () => {
            axiosInstance.get("/auth/me")
                .then((response) => {
                    setUser(response.data);
                })
                .catch(() => {
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        if (window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
            fetchUserInfo();
        } else {
            setLoading(false);
        }

    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
