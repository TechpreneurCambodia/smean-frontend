// TODO: Update UI

'use client';
import React, { useEffect, useState } from 'react';
import TranscriptCard from '@/components/TranscriptCard';
import Player from '@/components/Player';
import Layout from '@/components/Layout';
import { getNoteTranscriptionDetails } from '@/services/api/notes/details';
import { useParams } from 'next/navigation'
import { convertToTimestamp } from '@/services/utils/convert-to-timestamp';
import DateTime from '@/components/DateTime';
import BackButton from '@/components/BackButton';
import { Pencil } from 'lucide-react';

const Page = () => {
    const params = useParams()
    const [transcripts, setTranscripts] = useState(null);
    const [note, setNote] = useState(null);

    useEffect(() => {
        if (params.noteId) {
            async function fetchNoteDetails() {
                const { note, data } = await getNoteTranscriptionDetails(params.noteId);
                setTranscripts(data);
                setNote(note);
            }
            fetchNoteDetails();
        }
    }, [params.noteId]);

    if (!transcripts) {
        return <Layout>Loading...</Layout>;
    }

    return (
        <Layout>
            {/* <DateTime />
            <BackButton /> */}

            <div className="container mx-auto px-4 py-8 ">
                <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">ប្រតិចារិកសង្ខេប / {note.title}
                    <Pencil className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black" /></h1>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {transcripts && transcripts.map((transcript) => (
                        <TranscriptCard
                            key={transcript.id}
                            heading={`${convertToTimestamp(transcript.startAt)}-${convertToTimestamp(transcript.endAt)}`}
                            description={`${transcript.summary}  ${transcript.content}`}
                            href="#"
                        />
                    ))}

                </div>
            </div>
        </Layout>

    );
}

export default Page;
