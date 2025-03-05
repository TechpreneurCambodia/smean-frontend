import axiosInstance from "@/services/axiosInstance";
import toast from "react-hot-toast";

export const uploadAudio = async (files, segmentDuration = 180) => {

    if (files.length === 0) {
        toast.error('Please upload at least one file before proceeding.');
        return;
    }

    if (![180, 300].includes(segmentDuration)) {
        toast.error('Invalid segment duration. Only 3 minutes or 5 minutes are allowed.');
        return;
    }

    const formData = new FormData();
    files.forEach((file) => {
        formData.append('file', file);
    });
    formData.append('segmentDuration', segmentDuration);

    try {
        toast.loading('Uploading audio...', { duration: Infinity }); 
        const { data } = await axiosInstance.post('/audio/split-and-upload', formData);
        return data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    } finally {
        toast.dismiss();
        toast.success('Upload successful.');
    }
};