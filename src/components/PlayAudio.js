"use client";

import { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause, RefreshCw } from "lucide-react";

const PlayAudio = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (waveformRef.current && audioSrc) {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#CBD5E1", // Light grayish blue
        progressColor: "#3B82F6", // Blue progress
        cursorWidth: 2,
        cursorColor: "#3B82F6",
        barWidth: 2,
        barGap: 2,
        barRadius: 2,
        height: 50,
        responsive: true,
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
    <div className="flex flex-col items-center">
      {/* Waveform Display (Above the Button) */}
      <div className="w-full max-w-md mb-4 rounded-lg overflow-hidden">
        <div ref={waveformRef}></div>
      </div>

      {/* Countdown + Play Button */}
      <div className="flex items-center gap-12">
        <div className="flex flex-col items-center text-primary text-sm">
          <RefreshCw size={24} strokeWidth={1.5} />
          <span className="text-sm font-semibold">3</span>
        </div>

        {/* Play Button */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-24 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>

        <div className="flex flex-col items-center text-primary text-sm">
          <RefreshCw size={24} strokeWidth={1.5} />
          <span className="text-sm font-semibold">3</span>
        </div>
      </div>
    </div>
  );
};

export default PlayAudio;
