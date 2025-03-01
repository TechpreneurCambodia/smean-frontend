"use client";

import { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const PlayAudio = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (waveformRef.current && audioSrc) {
      if (wavesurfer.current) {
        wavesurfer.current.destroy(); // Reset WaveSurfer instance if exists
      }

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ffffff",
        progressColor: "#ff0000",
        barWidth: 2,
        barHeight: 1,
        cursorWidth: 2,
        cursorColor: "#ff0000",
        responsive: true,
        height: 80,
      });

      wavesurfer.current.load(audioSrc);
    }

    return () => {
      if (wavesurfer.current) wavesurfer.current.destroy();
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
      {/* Time Display */}
      <div className="text-4xl font-semibold text-primary">
        <span className="text-darkGray ">0</span>5:06.10
      </div>

      {/* Waveform Display */}
      <div className="w-full max-w-md bg-black my-4 rounded-lg overflow-hidden">
        <div ref={waveformRef}></div>
      </div>

      {/* Play / Pause Button */}
      <div className="flex items-center gap-4">
        <button
          className="btn btn-circle bg-blue-100 hover:bg-blue-200 shadow-md p-4"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <span className="text-3xl text-blue-600">⏸️</span>
          ) : (
            <span className="text-3xl text-blue-600">▶️</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default PlayAudio;
