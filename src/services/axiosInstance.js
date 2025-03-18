// axiosInstance.js
import axios from "axios";
import toast from "react-hot-toast";
import { humanize } from "./utils/humanize";
import { eraseCookie, getCookie, setCookie } from "./utils/cookies";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = getCookie("access_token");
    const language = getCookie("language") || "en";
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    } else {
      console.warn("No access token found in sessionStorage");
    }

    config.headers["Accept-Language"] = language;
    return config;
  },
  (error) => {
    toast.error(humanize(error.message));
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
        const refresh_token = getCookie("refresh_token");

        if (!refresh_token) {
          toast.error("Session expired. Please log in again.");
          
          eraseCookie("access_token");
          eraseCookie("refresh_token");
          window.location.href = '/login';
          return Promise.reject(error);
        }

        try {
          const { data } = await refreshInstance.post("/auth/refresh-token", { token: refresh_token });

          setCookie("access_token", data.access_token);
          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          eraseCookie('access_token');
          eraseCookie('refresh_token');
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
    }
    toast.error(humanize("Response error: " + (error.response?.data?.message || error.message)));
    return Promise.reject(error);
  }
);

export default axiosInstance;
