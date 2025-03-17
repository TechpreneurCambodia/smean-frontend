import axiosInstance from "@/services/axiosInstance";
import toast from "react-hot-toast";

export const uploadAudio = async ({files, chunkDuration = 180, title}) => {

    if (files.length === 0) {
        toast.error('Please upload at least one file before proceeding.');
        return;
    }

    if (![180, 300].includes(chunkDuration)) {
        toast.error('Invalid segment duration. Only 3 minutes or 5 minutes are allowed.');
        return;
    }

    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('chunkDuration', chunkDuration);
    if (title)
        formData.append('title', title);
    else
        formData.append('title', files[0].name.split('.').slice(0, -1).join('.'));
    try {
<<<<<<< HEAD
        toast.loading('កំពុងបញ្ចូលអូឌីយ៉ូ...', { duration: Infinity }); 
=======
        toast.loading('Uploading audio...', { duration: Infinity });
>>>>>>> 66effc3cdd4da1a64e575fec6e130bb355c93888
        const { data } = await axiosInstance.post('/audio/split-and-upload', formData);
        toast.success('Upload successful.');
        return data;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    } finally {
        toast.dismiss();
    }
};