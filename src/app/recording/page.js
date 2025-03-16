"use client";
import { useState } from 'react';
import { Pencil } from "lucide-react";
import TimeAndRecorder from '../../components/TimeAndRecorder';
import Layout from '@/components/Layout';
import DateTime from '@/components/DateTime';
import { Tooltip } from '@mui/material';
function Page() {
    const [recordings, setRecordings] = useState([]);
    const [recordingTitle, setRecordingTitle] = useState("កំណត់ឈ្មោះថត");

    const addRecording = (recording) => {
        setRecordings((prevRecordings) => [...prevRecordings, recording]);
    };

    return (
        <Layout>
            <div className="m-4 flex flex-col min-h-screen">
                <DateTime />
                
                {/* Page Title */}
                <div className="flex flex-col items-start">
                    <h2 className="font-bold text-[36px] flex items-center p-5 text-primary">
                        ថតសំឡេងរបស់អ្នក
                    </h2>

                    {/* Editable Recording Title */}
                    <div className="flex items-center gap-2 p-3 border rounded-lg shadow-md w-full max-w-md bg-white">
                        <input
                            type="text"
                            value={recordingTitle}
                            onChange={(e) => setRecordingTitle(e.target.value)}
                            className="flex-1 p-2 text-lg border-none outline-none bg-transparent"
                        />
                        <Tooltip title="កែឈ្មោះចំណងជើង" arrow>
                            <Pencil size={20} className="text-gray-500 cursor-pointer" />
                        </Tooltip>
                    </div>
                </div>

                {/* Center the TimeAndRecorder */}
                <div className="flex flex-grow justify-center items-center mb-80">
                    <TimeAndRecorder addRecording={addRecording} />
                </div>

                {/* Display Recordings */}
                <div className="mt-4">
                    {recordings.map((recording, index) => (
                        <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold">{recordingTitle} {index + 1}:</h2>
                            <audio controls src={recording.audioUrl} className="mt-2"></audio>
                            <h2 className="text-lg font-semibold mt-2">Transcript:</h2>
                            <pre className="bg-gray-100 p-2 rounded">
                                {JSON.stringify(recording.transcript, null, 2)}
                            </pre>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Page;
