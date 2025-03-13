"use client";
import { useState } from 'react';
import SummaryNoDetail from '../../components/SummaryNoDetail';
import TimeAndRecorder from '../../components/TimeAndRecorder';
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
                <DateTime />
                <div className='flex flex-start'>
                    <div className="flex justify-start">
                        <h2 className="font-bold text-5xl flex items-center p-5 text-primary">
                            ថតសំឡេងរបស់អ្នក
                        </h2>
                    </div>
                    <div className='mt-5'>
                        <MinuteOption/>
                    </div>
                </div>
                <SummaryNoDetail />
                <div className='ml-24'>
                    <TimeAndRecorder addRecording={addRecording} />
                </div>
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
