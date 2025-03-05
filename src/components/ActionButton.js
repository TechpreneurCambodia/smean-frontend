"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaBook, FaUpload } from "react-icons/fa";

function ActionButton() {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-4">
    <button className="flex items-center px-6 py-3 bg-white text-primary rounded-lg shadow" onClick={() => router.push('/recordingpage')}>
      <FaBook className="mr-2" /> ថតសំឡេងភ្លាមៗ
    </button>
    <button className="flex items-center px-6 py-3 bg-white text-primary rounded-lg shadow" onClick={() => router.push('/upload')}>
      <FaUpload className="mr-2" /> បញ្ចូលប្រតិចារិក/Upload
    </button>
  </div>
  )
}

export default ActionButton