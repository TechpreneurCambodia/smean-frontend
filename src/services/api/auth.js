import axios from 'axios';
import { eraseCookie, setCookie, getCookie } from '../utils/cookies';
import axiosInstance from '../axiosInstance';

// Login function
export const loginUser = async ({ usernameOrEmail, password }) => {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { usernameOrEmail, password });
        const maxAge = 60 * 60 * 24; // 1 day in seconds
        setCookie('access_token', data.access_token, maxAge);
        setCookie('refresh_token', data.refresh_token, maxAge + 1);
        return data;
    } catch (error) {
        console.log("error: ", error);
        throw error.response?.data?.message || 'Login failed';
    }
};
// Register function
export const registerUser = async ({ firstName, lastName, email, username, password }) => {
    try {
        const { data } = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { firstName, lastName, email, username, password });
        const maxAge = 60 * 60 * 24; // 1 day in seconds
        setCookie('access_token', data.access_token, maxAge);
        setCookie('refresh_token', data.refresh_token, maxAge + 1);
        return data;
    } catch (error) {
        throw error.response?.data?.message || 'Register failed';
    }
};
// Logout function
export const logoutUser = async () => {
    try {
      const token = getCookie('access_token');
     
      await axiosInstance.post('/auth/logout', { refreshToken: getCookie('refresh_token') });

  
      eraseCookie('access_token');
      eraseCookie('refresh_token');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(humanize(error.message));
    }
  };