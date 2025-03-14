'use client';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import { getAllNotes } from '@/services/api/notes';
import Head from 'next/head';

export default function Page() {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        async function fetchNoteDetails() {
            const { notes } = await getAllNotes();
            setNotes(notes);
        }
        fetchNoteDetails();
    }, []);

    if (!notes) {
        return (
            <Layout>Loading...</Layout>
        );
    }
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-5xl text-primary font-bold mb-8">កំណត់ត្រាសង្ខេបរបស់អ្នក</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes && notes.map((note) => {
                        const date = new Date(note.createdAt);
                        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
                        return (
                            <NoteCard
                                key={note.id}
                                heading={note.title}
                                description={formattedDate}
                                href={`/notes/${note.id}/transcriptions`}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}
