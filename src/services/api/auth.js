import axios from "axios";
import axiosInstance from "../axiosInstance";
import { setCookie, eraseCookie, getCookie } from "../utils/cookies";
// Login function
export const loginUser = async ({ usernameOrEmail, password }) => {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { usernameOrEmail, password });
        const maxAge = 60 * 60 * 24; // 1 day in seconds
        setCookie('access_token', data.access_token, maxAge);
        setCookie('refresh_token', data.refresh_token, maxAge + 1);
        return data;
    } catch (error) {
        console.error("Login error: ", error);
        const message = error.response?.data?.message || "Login failed. Please try again.";
        throw new Error(message);
    }
};
// Register function
export const registerUser = async ({ firstName, lastName, email, username, password }) => {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { firstName, lastName, email, username, password });
        const maxAge = 60 * 60 * 24; // 1 day in seconds
        setCookie('access_token', data.access_token, maxAge);
        setCookie('refresh_token', data.refresh_token, maxAge + 1);
        return data;
    } catch (error) {
        console.error("Registration error: ", error);
        const message = error.response?.data?.message || "Registration failed. Please try again.";
        throw new Error(message);
    }
};
export const logoutUser = async () => {
    try {
        const refresh_token = getCookie("refresh_token");
        const token = getCookie('access_token');

        if (!refresh_token) {
            throw new Error("No refresh token found. Please log in again.");
        }

        await axiosInstance.post("/auth/logout", {
            refreshToken: refresh_token,
        });

        eraseCookie("access_token");
        eraseCookie("refresh_token");
    } catch (error) {
        console.error("Logout error:", error);
        toast.error("Logout failed. Please try again.");
    }
};
