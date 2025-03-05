"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import {  Mic, Upload } from "lucide-react";

function ActionButton() {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-4">
    <button className="flex items-center px-6 py-3 bg-white text-primary rounded-lg shadow">
      <Mic className="mr-2" /> ថតសំឡេងភ្លាមៗ
    </button>
    <button className="flex items-center px-6 py-3 bg-white text-primary rounded-lg shadow" onClick={() => router.push('/uploadAudio')}>
      <Upload className="mr-2" /> បញ្ចូលឯកសារ
    </button>
  </div>
  )
}

export default ActionButton