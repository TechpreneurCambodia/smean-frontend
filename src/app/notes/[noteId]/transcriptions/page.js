'use client';
import React, { useEffect, useState } from 'react';
import TranscriptCard from '@/components/TranscriptCard';
import Layout from '@/components/Layout';
import { getNoteTranscriptionDetails } from '@/services/api/notes/details';
import { useParams } from 'next/navigation';
import { convertToTimestamp } from '@/services/utils/convert-to-timestamp';
import Rename from './details/Rename';
import PlayBackComponent from '@/components/PlayBackComponent';
import MinuteOption from '@/components/MinuteOption';
import NoteListSkeleton from '@/components/Skeletons/NoteListSkeleton'; // Assuming this is the skeleton loader component

const Page = () => {
    const params = useParams();
    const [transcripts, setTranscripts] = useState(null);
    const [note, setNote] = useState(null);

    useEffect(() => {
        if (params.noteId) {
            async function fetchNoteDetails() {
                try {
                    const { note, data } = await getNoteTranscriptionDetails(params.noteId);
                    setTranscripts(data);
                    setNote(note);
                } catch (error) {
                    console.error('Error fetching note details:', error);
                }
            }
            fetchNoteDetails();
        }
    }, [params.noteId]);

    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-center items-start w-full h-full gap-10 mt-10">
                {note && transcripts ? (

                    <>
                        <div className="flex flex-col w-full max-w-2xl gap-20">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-5xl text-primary font-bold">
                                    កំណត់ត្រាសង្ខេបរបស់អ្នក
                                </h1>
                                <Rename />
                            </div>
                            <div>
                                <PlayBackComponent audioUrl={`${process.env.NEXT_PUBLIC_API_URL_MEDIA}${note.noteSource.sourceUrl}`} />
                            </div>
                        </div>


                        <div className="hidden md:block bg-gray-300 w-1 h-auto"></div>
                        <div className="flex flex-row w-full max-w-2xl gap-5">
                            <div className="w-1 h-screen bg-gray"></div>
                            <div className="w-full flex flex-col gap-4">
                                <h1 className="text-4xl font-bold">សង្ខេបសម្លេងជាអក្សរ</h1>
                                <MinuteOption />
                                <div className="w-full flex flex-col gap-4">
                                    {transcripts && transcripts.map((transcript) => (
                                        <TranscriptCard
                                            key={transcript.id}
                                            heading={`${convertToTimestamp(transcript.startAt)}-${convertToTimestamp(transcript.endAt)}`}
                                            description={transcript.summary}
                                            href={`/notes/${note.id}/transcriptions/details`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <NoteListSkeleton />
                )}
            </div>
        </Layout>
    );

};

export default Page;
