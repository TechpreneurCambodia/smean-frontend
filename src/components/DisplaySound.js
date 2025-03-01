"use client"; // Ensure this is treated as a client component in Next.js

import { useState, useRef, useEffect } from "react";
import { MicrophoneIcon, StopIcon } from "@heroicons/react/solid";
import { PlayCircle } from "lucide-react";

const DisplaySound = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); // Time in milliseconds
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  // Format time in mm:ss format
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return { minutes, seconds };
  };

  // Start recording
  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      clearInterval(timerRef.current);
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    setRecording(true);
    setElapsedTime(0);
    startTimeRef.current = Date.now();

    // Start timer
    timerRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current);
    }, 1000); // Update every second
  };

  // Stop recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
    clearInterval(timerRef.current);
  };

  const { minutes, seconds } = formatTime(elapsedTime);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h2 className="font-bold text-[32px] flex items-center justify-center gap-2">00:12:34</h2>
      
      {/* Timer with hover effect */}
      <div className="text-2xl font-mono mt-2 hover:cursor-pointer hover:text-green-500 transition duration-200">
        <span className="text-gray-500">{minutes}:</span>
        <span className="text-green-500">{seconds}</span>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          className={`btn ${recording ? "btn-red" : "btn-green"} p-3 rounded-full`}
          onClick={recording ? handleStopRecording : handleStartRecording}
        >
          {recording ? (
            <StopIcon className="w-8 h-8 text-white" />
          ) : (
            <PlayCircle className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {audioUrl && (
        <div className="mt-4">
          <h3 className="font-medium text-lg">ព័ត៌មានលម្អិតនៃការថត</h3>
          <p>រយៈពេល: {minutes}:{seconds}</p>
          <audio controls>
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default DisplaySound;
