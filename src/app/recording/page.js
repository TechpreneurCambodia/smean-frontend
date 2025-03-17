"use client";
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import TimeAndRecorder from '../../components/TimeAndRecorder';
import Layout from '@/components/Layout';
import MinuteOption from '@/components/MinuteOption';
import { FileTextIcon, Text, TextIcon } from 'lucide-react';

function Page() {
    const [recordingTitle, setRecordingTitle] = useState('');
    const [selectedMinutes, setSelectedMinutes] = useState(3);
    const handleTitleChange = (e) => {
        setRecordingTitle(e.target.value);
    };
    const handleMinuteSelection = (minutes) => {
        setSelectedMinutes(minutes);
        console.log(`Selected minutes: ${minutes}`);
    };

    return (
        <Layout>
            <div className="m-4 flex flex-col min-h-screen align-center">

                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-[36px] p-5 text-primary">
                        ថតសំឡេងរបស់អ្នក
                    </h2>

                    <img src='/recording-transcription.svg' alt='record' className='w-1/5 opacity-20' />
                    <div className='grid grid-rows-2 mb-8 gap-4 items-center justify-center'>

                        <div className='w-[300px] h-full flex flex-row justify-center items-center font-medium border border-primary text-primary rounded-md shadow-md'>
                            <span className='flex flex-row justify-center items-center ml-4 mr-0'><FileTextIcon /></span>
                            <input
                                type="text"
                                value={recordingTitle}
                                onChange={handleTitleChange}
                                className="w-auto flex-1 pl-2 border-none outline-none bg-transparent"
                                placeholder="កំណត់ចំណងជើង"
                            />

                        </div>
                        <MinuteOption onSelect={handleMinuteSelection} />

                    </div>
                </div>

                <div className="flex flex-grow justify-center items-center mb-80">
                    <TimeAndRecorder title={recordingTitle} minutes={selectedMinutes} />
                </div>

            </div>
        </Layout>
    );
}

export default Page;
