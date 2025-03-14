"use client";
import { useState } from "react";
import TimeAndRecorder from "@/components/TimeAndRecorder";
const RecordPage = () => {
  const [recordings, setRecordings] = useState([]);

  const addRecording = (recording) => {
    setRecordings((prevRecordings) => [...prevRecordings, recording]);
  };

  return (
    <div>
      <h1>Record Audio</h1>
      <TimeAndRecorder addRecording={addRecording} />
      {recordings.map((recording, index) => (
        <div key={index}>
          <h2>Recorded Audio {index + 1}:</h2>
          <audio controls src={recording.audioUrl}></audio>
          <h2>Transcript:</h2>
          <pre>{JSON.stringify(recording.transcript, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default RecordPage;
