'use client';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import { getAllNotes } from '@/services/api/notes';
import { deleteNote } from '@/services/api/notes/delete';

export default function Page() {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        async function fetchNoteDetails() {
            const { notes } = await getAllNotes();
            setNotes(notes);
        }
        fetchNoteDetails();
    }, []);

    // Function to handle note deletion
    const handleDeleteNote = async (id) => {
        try {
            await deleteNote(id);
            setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id)); // Update the state to remove the deleted note
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    if (!notes) {
        return <Layout>Loading...</Layout>;
    }

    // Sort notes by createdAt date (most recent first)
    const sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-5xl text-primary font-bold mb-8">កំណត់ត្រាសង្ខេបរបស់អ្នក</h1>
                <div className="grid grid-cols-1 gap-6">
                    {sortedNotes.map((note) => {
                        const date = new Date(note.createdAt);
                        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
                        return (
                            <NoteCard
                                key={note.id}
                                id={note.id}
                                heading={note.title}
                                description={formattedDate}
                                href={`/notes/${note.id}/transcriptions`}
                                onDelete={() => handleDeleteNote(note.id)} // Pass delete handler to NoteCard
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}
