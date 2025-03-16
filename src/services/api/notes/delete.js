import axiosInstance from '@/services/axiosInstance';
import React from 'react'
import toast from 'react-hot-toast';


export const deleteNote = async (noteId) => {
    try {
        console.log('Deleting note with ID:', noteId);
        const { data } = axiosInstance.delete(`/notes/${noteId}`, { responseType: 'text' });
        toast.success('Note deleted successfully');
        return data;
    } catch (error) {
        toast.error('Error deleting note');
        if (error.response) {
            console.error('Server responded with:', error.response.data);
        } else {
            console.error('Error deleting note:', error);
        }
        throw error;
    }
};
