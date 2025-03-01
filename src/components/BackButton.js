"use client"; // Ensures this runs as a client component

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/uploadtranscript')}
      className="flex items-center gap-2 text-black hover:underline"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Go Back</span>
    </button>
  );
};

export default BackButton;
