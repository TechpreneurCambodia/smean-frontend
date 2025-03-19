'use client';
import { useState, useEffect, Suspense } from 'react';
import Layout from '@/components/Layout';
import NoteCard from '@/components/NoteCard';
import { getAllNotes } from '@/services/api/notes';
import { deleteNote } from '@/services/api/notes/delete';
import NoteListSkeleton from '@/components/Skeletons/NoteListSkeleton';


function DeleteConfirmationModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">បញ្ជាក់ការលុប</h2>
        <p className="mb-6">តើអ្នកប្រាកដជាចង់លុបកំណត់ត្រានេះពិតមែនដែរឬទេ?</p>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-4 py-2 mr-2 rounded"
            onClick={onCancel}
          >
            បោះបង់
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            លុប
          </button>
        </div>
      </div>
    </div>
  );
}
export default function Page() {
  const [notes, setNotes] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    async function fetchNoteDetails() {
      const { notes } = await getAllNotes();
      setNotes(notes);
    }
    fetchNoteDetails();
  }, []);

  const handleOpenDeleteModal = (id) => {
    setNoteToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteNote(noteToDelete);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteToDelete));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
    setIsModalOpen(false);
    setNoteToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setNoteToDelete(null);
  };

  let sortedNotes = [];
  if (notes) {
    sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl text-primary font-bold mb-8">កំណត់ត្រាសង្ខេបរបស់អ្នក</h1>
        <div className="grid grid-cols-1 gap-6">
          {notes === null ? (
            <NoteListSkeleton />
          ) : notes.length === 0 ? (
            <p className="text-center text-gray-500">គ្មានកំណត់ត្រាអ្នកនៅឡើយទេ</p> // Message in Khmer saying no notes available
          ) : (
            sortedNotes.map((note) => {
              const date = new Date(note.createdAt);
              const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
              return (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  heading={note.title}
                  description={formattedDate}
                  href={`/notes/${note.id}/transcriptions`}
                  onDelete={() => handleOpenDeleteModal(note.id)}
                />
              );
            })
          )}
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </Layout>
  );
}

