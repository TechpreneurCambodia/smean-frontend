import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Pause, Mic, Square, Trash, Check } from "lucide-react";
import { Tooltip } from "@mui/material";
import { uploadAudio } from "@/services/api/audios/uploadAudio";
import PlayBackComponent from "./PlayBackComponent";
import toast from "react-hot-toast";

const TimeAndRecorder = ({ title = 'recording', minutes = 1 }) => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [file, setFile] = useState("");
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const router = useRouter();

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStartRecording = async () => {
    audioChunksRef.current = [];
    setElapsedTime(0);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });

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
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const file = new File([audioBlob], "recording.webm", { type: "audio/webm" });

        const audioUrl = URL.createObjectURL(audioBlob);
        clearInterval(timerRef.current);
        setElapsedTime(0);
        setFile(file);
        setAudioUrl(audioUrl);
        setShowModal(true);
      };
    }
    setRecording(false);
    setPaused(false);
  };

  const handleUpload = async () => {
    setConfirmDisabled(true);
    await uploadAudio({ files: [file], title: title, chunkDuration: minutes * 60 })
      .then((res) => {
        const { note } = res;
        router.push(`/notes/${note.id}/transcriptions`);
      })
      .catch((err) => {
        toast.error("An error occurred while uploading the file. Please try again.", err);
        console.log(err);
      })
      .finally(() => {
        setConfirmDisabled(false);
      });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-3 bg-blue-100 rounded-full max-w-lg shadow-md mx-auto">
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <PlayBackComponent audioUrl={audioUrl} />
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="max-w-36  mr-6 px-6 py-3 border border-red-400 bg-white text-red-400 rounded-full shadow-sm hover:border-red-700  hover:text-red-700 transition"
              >
                <div className="flex items-center justify-start">
                  <Trash className="mr-2" />
                  <span>បោះបង់</span>
                </div>
              </button>
              <button
                onClick={handleUpload}
                className="max-w-36 px-6 py-3 border border-green-400 bg-white text-green-400 rounded-full shadow-sm hover:border-green-700  hover:text-green-700 transition"
                disabled={confirmDisabled}
              >
                <div className="flex items-center justify-start">
                  <Check className="mr-2" />
                  <span>ទទួលយក</span>
                </div>
              </button>
            </div>
          </div>
          <label className="modal-backdrop" onClick={() => setShowModal(false)}>
            Close
          </label>
        </div>
      )}
      <div className="w-6 ml-4 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
      <div className="ml-4 mr-4 text-primary font-semibold text-[24px]">{formatTime(elapsedTime)}</div>
      <div className="flex gap-2">
        {!recording ? (
          <button onClick={handleStartRecording} className="w-10 mr-4 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip title="ចុចថតសម្លេង" arrow>
              <Mic className="text-gray-500 w-6 h-6" />
            </Tooltip>
          </button>
        ) : paused ? (
          <button onClick={handleResumeRecording} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip title="ចុចថតសម្លេង" arrow>
              <Mic className="text-green-500 w-6 h-6" />
            </Tooltip>
          </button>
        ) : (
          <button onClick={handlePauseRecording} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip title="ផ្អាក" arrow>
              <Pause className="text-yellow-500 w-6 h-6" />
            </Tooltip>
          </button>
        )}
        {recording && (
          <button onClick={handleStopRecording} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
            <Tooltip title="បញ្ចប់ការថត" arrow>
              <Square className="text-red-500 w-6 h-6" />
            </Tooltip>
          </button>
        )}
      </div>
    </div>
  );
};

export default TimeAndRecorder;
