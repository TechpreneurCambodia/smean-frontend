"use client";

import { useState } from "react";
import TimeAndRecorder from "../../components/TimeAndRecorder";
import PlayAudio from "../../components/PlayAudio";
import Logo from "../../components/Logo";
import DateTime from "../../components/DateTime";
import MinuteOption from "../../components/MinuteOption";
import WholeSummary from "../../components/wholesummary";
import SummaryTranscript from "../../components/SummaryTranscript";

const RecordPage = () => {
  const [audioSrc, setAudioSrc] = useState(null);

  return (
    <div className='m-4'>
      <Logo />
      
      <DateTime />
      <div className='flex justify-center items-center'>
        <h2 className="font-bold text-[32px] flex items-center gap-2 ">
          ថតសំឡេងរបស់អ្នក
        </h2>
        <div className='ml-4'>
          <MinuteOption />
        </div>
      </div>
      <div className="flex justify-between mt-12">
        {/* Recorder Section */}
        <div className="flex items-center flex-col w-1/2 pr-4 mt-24">
          <TimeAndRecorder setAudioUrl={setAudioSrc} />
          
          
        </div>

        {/* Summary Transcript Section */}
        {/* <div className="flex-1 pl-4">
          <SummaryTranscript />
        </div> */}
      </div>
    </div>
  );
};

export default RecordPage;
