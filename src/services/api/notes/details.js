import axiosInstance from "@/services/axiosInstance";
import toast from "react-hot-toast";

export const getNoteTranscriptionDetails = async (noteId) => {
    try {
        const { data } = await axiosInstance.get(`/notes/${noteId}/note-transcriptions`);
        return data;
    } catch (error) {
        toast.error('Error fetching note details');
        console.error('Error fetching note details:', error);
        throw error;
    }
}

export const getNoteDetails = async (noteId) => {
    try {
        const { data } = await axiosInstance.get(`/notes/${noteId}`);
        return data;
    } catch (error) {
        toast.error('Error fetching note details');
        console.error('Error fetching note details:', error);
        throw error;
    }
}