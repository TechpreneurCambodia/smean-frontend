
"use client";
import { useEffect, useState } from "react";
import TranscriptCard from "@/components/TranscriptCard";
import Layout from "@/components/Layout";
import { getNoteTranscriptionDetails } from "@/services/api/notes/details";
import { useParams } from "next/navigation";
import { convertToTimestamp } from "@/services/utils/convert-to-timestamp";
import { updateNoteTitle } from "@/services/api/notes/update";
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 ">
        <div className="text-4xl font-bold mb-8 flex items-center gap-2">
          <Rename />
        </div>
        <div className="flex flex-col gap-6">
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
