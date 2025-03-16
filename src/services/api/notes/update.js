import axiosInstance from "@/services/axiosInstance";
import toast from "react-hot-toast";

export const  updateNoteTitle = async (noteId, title) => {
    try {
        console.log(noteId);
        const { data } = await axiosInstance.patch(`/notes/${noteId}`, { title });
        toast.success('Note title updated');
        return data;
    } catch (error) {
        toast.error('Error updating note title');
        console.error('Error updating note title:', error);
        throw error;
    }
}