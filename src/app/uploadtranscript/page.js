import React from "react";

import SummaryTranscript from "../../components/SummaryTranscript";
import TimeAndRecorder from "../../components/TimeAndRecorder";
import Logo from "../../components/Logo";

function page() {
  return (
    <div>
      <Logo />
      <h2 className="font-bold text-[32px] flex items-center gap-2">
        📖 ប្រតិចារិក/Transcript
      </h2>
      <h2 className="font-regular text-[20px] flex items-center gap-2">
        AMK-meeting.wav
      </h2>

      <SummaryTranscript />
      <div className=" mb-16 ">
        <TimeAndRecorder />
      </div>
    </div>
  );
}

export default page;
