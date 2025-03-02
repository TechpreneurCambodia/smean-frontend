import axiosInstance from "@/services/axiosInstance";
import toast from "react-hot-toast";

export const getAllNotes = async () => {
    try {
        const { data } = await axiosInstance.get('/notes');
        return data;
    } catch (error) {
        toast.error('Error fetching notes');
        console.error('Error fetching notes:', error);
        throw error;
    }
}