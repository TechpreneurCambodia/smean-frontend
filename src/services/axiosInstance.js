import axios from 'axios';
import toast from 'react-hot-toast';
import { humanize } from './utils/humanize';
import { eraseCookie, setCookie, getCookie } from './utils/cookies';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
    // timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const access_token = getCookie('access_token');
        const refresh_token = getCookie('refresh_token');
        const language = getCookie('language') || 'en';
        if (access_token) {
            config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        config.headers['Accept-Language'] = language;
        return config;
    },
    (error) => {
        toast.error(humanize(error.message));
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data.message) {
            // toast.success(humanize(response.data.message));
        }
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
            originalRequest._retry = true;
            if (window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
                const refresh_token = getCookie('refresh_token');
                try {
                    const { data } = await axiosInstance.post('/auth/refresh-token', { token: refresh_token });
                    setCookie('access_token', data.access_token, 1);
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    eraseCookie('access_token');
                    eraseCookie('refresh_token');
                    window.location.href = '/login';
                    toast.error('Session expired. Please log in again.');
                }
            }
        } else {
            toast.error(humanize('Response error: ' + (error.response?.data?.message || error.message)));
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;
