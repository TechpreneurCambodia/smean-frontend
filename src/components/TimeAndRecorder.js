"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Pause, Mic, Square } from "lucide-react";
import { Tooltip } from "@mui/material";

const TimeAndRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const router = useRouter(); // Initialize router

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStartRecording = async () => {
    // Reset state for new recording
    audioChunksRef.current = [];
    setElapsedTime(0);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setRecording(true);
    setPaused(false);
    setElapsedTime(0);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current);
    }, 1000);
  };

  const handlePauseRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.pause();
      setPaused(true);
      clearInterval(timerRef.current);
    }
  };

  const handleResumeRecording = () => {
    if (mediaRecorderRef.current?.state === "paused") {
      mediaRecorderRef.current.resume();
      setPaused(false);
      startTimeRef.current = Date.now() - elapsedTime;
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1000);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        sessionStorage.setItem("audioUrl", audioUrl); // Save to session storage
        clearInterval(timerRef.current);
        router.push("/playback"); // Navigate to playback page
      };
    }
    setRecording(false);
    setPaused(false);
  };

  const { minutes, seconds } = formatTime(elapsedTime);

  return (
    <div className="flex flex-wrap items-center gap-3 p-3 bg-blue-100 rounded-full  max-w-lg shadow-md mx-auto">
      <div className="w-6 ml-4 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
      <div className="ml-4 mr-4 text-primary font-semibold text-[24px]">{formatTime(elapsedTime)}</div>
      <div className="flex gap-2">
        {!recording ? (
          <button onClick={handleStartRecording} className="w-10 mr-4 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip titlt="ចុចថតសម្លេង" arrow>
              <Mic className="text-gray-500 w-6 h-6" />
            </Tooltip>
          </button>
        ) : paused ? (
          <button onClick={handleResumeRecording} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip titlt="ចុចថតសម្លេង" arrow>
              <Mic className="text-green-500 w-6 h-6" />
            </Tooltip>
          </button>
        ) : (
          <button onClick={handlePauseRecording} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip titlt="ផ្អាក" arrow>
              <Pause className="text-yellow-500 w-6 h-6" />
            </Tooltip>
          </button>
        )}
        {recording && (
          <button onClick={handleStopRecording} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip titlt="បញ្ចប់ការថត" arrow>
              <Square className="text-red-500 w-6 h-6" />
            </Tooltip>
          </button>
        )}
      </div>
    </div>
  );
};

export default TimeAndRecorder;
