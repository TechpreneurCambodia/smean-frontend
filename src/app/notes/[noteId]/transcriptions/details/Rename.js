import React, { useEffect, useState } from "react";
import { getNoteTranscriptionDetails } from "@/services/api/notes/details";
import { useParams } from "next/navigation";
import { updateNoteTitle } from "@/services/api/notes/update";
import { Pencil } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function Rename() {
  const params = useParams();
  const [transcripts, setTranscripts] = useState(null);
  const [note, setNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    if (params.noteId) {
      async function fetchNoteDetails() {
        try {
          const { note, data } = await getNoteTranscriptionDetails(
            params.noteId
          );
          setTranscripts(data);
          setNote(note);
          setNewTitle(note?.title || ""); // Ensure default value
        } catch (error) {
          console.error("Error fetching note details:", error);
        }
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
    
    <>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border-b-2 border-gray-300"
        />
      ) : note ? (
        <span>{note.title}</span>
      ) : (
        <Skeleton width={100} height={20} />
      )}
      <Pencil
        className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black"
        onClick={() => setIsEditing(true)}
      />
      {isEditing && (
        <button onClick={update} className="btn btn-sm ml-2 px-4 py-2">
          Save
        </button>
      )}
    </>
  );
}

export default Rename;
