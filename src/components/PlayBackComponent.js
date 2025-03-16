import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";

const PlayBackComponent = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    // Initialize WaveSurfer instance
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#CBD5E1",
      progressColor: "#3B82F6",
      cursorWidth: 2,
      cursorColor: "#3B82F6",
      barWidth: 3,
      barGap: 3,
      barRadius: 3,
      height: 100,
      responsive: true,
    });

    wavesurfer.current.load(audioUrl);

    wavesurfer.current.on("finish", () => {
      setIsPlaying(false); // Reset isPlaying when audio finishes
    });

    return () => {
      try {
        if (wavesurfer.current) {
          wavesurfer.current.destroy();
        }
      } catch (error) {
        // Optionally log the error or do nothing to suppress it
        console.error("Error during cleanup of WaveSurfer instance:", error);
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">កំណត់ត្រាសំឡេង</h1>

      <div className="w-full max-w-2xl mb-6 rounded-lg overflow-hidden">
        <div ref={waveformRef}></div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-28 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition text-xl"
      >
        {isPlaying ? <Pause size={36} /> : <Play size={36} />}
      </button>
    </div>
  );
};

export default PlayBackComponent;
