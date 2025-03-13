"use client";
import { useState, useRef } from "react";
import { MicrophoneIcon, StopIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";
import { uploadAudio } from "@/services/api/audios/uploadAudio";
import { Mic, Square } from "lucide-react";

const TimeAndRecorder = ({ addRecording }) => {
  const [recording, setRecording] = useState(false);
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

    return `${minutes}:${seconds}`;
  };

  // Start recording
  const handleStartRecording = async () => {
    // Reset state for new recording
    audioChunksRef.current = [];
    setElapsedTime(0);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const audioFile = new File([audioBlob], "recording.wav", { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
    
      setAudioUrl(audioUrl);
      
      clearInterval(timerRef.current);
      console.log(audioFile);

      try {
        const result = await uploadAudioFile(audioFile);
        if (typeof addRecording === 'function') {
          addRecording({ audioUrl, transcript: result.transcriptions ?? '' }); // Send recording to parent (RecordPage)
        }
      } catch (error) {
        console.error("Error uploading audio:", error);
      }
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    setRecording(true);
    setElapsedTime(0);
    startTimeRef.current = Date.now();

    // Start timer
    timerRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current);
    }, 1000);
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
    <div className="flex items-center gap-4 p-3 bg-blue-100 rounded-full w-fit shadow-md">
      {/* Animated Recording Indicator */}
      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Placeholder for waveform animation */}
      {/* <div className="flex-1 h-4 bg-blue-300 rounded-md w-24"></div> */}

      {/* Timer Display */}
      <div className="text-primary font-semibold text-xl">{formatTime(elapsedTime)}</div>

      {/* Record/Stop Button */}
      <button
        onClick={recording ? handleStopRecording : handleStartRecording}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400"
      >
        {recording ? <Square className="text-red-500 w-10 h-10" /> : <Mic className="text-gray-500 w-10 h-10" />}
      </button>
    </div>
  );
};

export default TimeAndRecorder;
