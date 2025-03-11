"use client";
import { useState } from 'react';
import SummaryNoDetail from '../../components/SummaryNoDetail';
import TimeAndRecorder from '../../components/TimeAndRecorder';
import Logo from '../../components/Logo';
import MinuteOption from '../../components/MinuteOption';
import DateTime from '../../components/DateTime';
import Layout from '../../components/Layout';

function Page() {
    const [recordings, setRecordings] = useState([]);

    const addRecording = (recording) => {
        setRecordings((prevRecordings) => [...prevRecordings, recording]);
    };

    return (
        <Layout>
            <div className="m-4">
                <Logo />
                <DateTime />
                <div className="flex justify-start">
                    <h2 className="font-bold text-[32px] flex items-center gap-2 ">
                        កំណត់ពេលវេលាថត៖
                    </h2>
                    <div className="ml-4">
                        <MinuteOption />
                    </div>
                </div>
                <SummaryNoDetail />
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
        </Layout>
    );
}

export default Page;
