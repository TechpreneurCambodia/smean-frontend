// TODO: Update UI

"use client";
import React, { useEffect, useState } from "react";
import TranscriptCard from "@/components/TranscriptCard";
import Player from "@/components/Player";
import Layout from "@/components/Layout";
import { getNoteTranscriptionDetails } from "@/services/api/notes/details";
import { useParams } from "next/navigation";
import { convertToTimestamp } from "@/services/utils/convert-to-timestamp";
import DateTime from "@/components/DateTime";
import BackButton from "@/components/BackButton";
import { Pencil } from "lucide-react";
import { updateNoteTitle } from "@/services/api/notes/update";
import { Input } from "@/components/ui/input";
import Rename from "./Rename";

const Page = () => {
  const params = useParams();
  const [transcripts, setTranscripts] = useState(null);
  const [note, setNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    if (params.noteId) {
      async function fetchNoteDetails() {
        const { note, data } = await getNoteTranscriptionDetails(params.noteId);
        setTranscripts(data);
        setNote(note);
        setNewTitle(note.title);
      }
      fetchNoteDetails();
    }
  }, [params.noteId]);

  const update = async () => {
    await updateNoteTitle(params.noteId, newTitle);
    setNote((prev) => ({ ...prev, title: newTitle }));
    setIsEditing(false);
  };

  if (!transcripts) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      {/* <DateTime />
            <BackButton /> */}

      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <Rename />
        </h1>
       
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {transcripts &&
            transcripts.map((transcript) => (
              <TranscriptCard
                key={transcript.id}
                heading={`${convertToTimestamp(
                  transcript.startAt
                )}-${convertToTimestamp(transcript.endAt)}`}
                description={
                  <>
                    <strong>Summary:</strong> {transcript.summary} <br />
                    <strong>Full Transcription:</strong>{" "}
                    <span style={{ whiteSpace: "pre-line" }}>
                      {transcript.content}
                    </span>
                  </>
                }
                href="#"
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
