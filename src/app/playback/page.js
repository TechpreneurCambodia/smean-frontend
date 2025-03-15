"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause, Trash, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tooltip } from "@mui/material";


const Playback = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const audioUrl = sessionStorage.getItem("audioUrl");

        if (!audioUrl) {
            router.push("/recording"); // Redirect if no audio is found
            return;
        }

        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#CBD5E1",
            progressColor: "#3B82F6",
            cursorWidth: 2,
            cursorColor: "#3B82F6",
            barWidth: 2,
            barGap: 2,
            barRadius: 2,
            height: 50,
            responsive: true,
        });

        wavesurfer.current.load(audioUrl);

        return () => {
            wavesurfer.current?.destroy();
        };
    }, [router]);

    const togglePlay = () => {
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
            setIsPlaying((prev) => !prev);
        }
    };

    return (
        <div className="flex  flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-semibold mt-4 mb-6">ចាក់សំឡេងឡើងវិញ</h1>

            <div className="w-full max-w-md mb-4 mt-4 rounded-lg overflow-hidden">
                <div ref={waveformRef}></div>
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={togglePlay}
                className="flex items-center mt-2 mb-2 justify-center  w-16 h-16 bg-primary text-white rounded-full shadow-sm hover:bg-blue-600 transition"
            >
                {isPlaying ? 
                    <Tooltip title="ផ្អាក" arrow>
                        <Pause size={28} />
                    </Tooltip> : 
                    <Tooltip title="ចាក់" arrow>
                        <Play size={28} />
                    </Tooltip>
                }
            </button>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => router.push("/recordingpage")}
                    className="w-36 mr-6 px-6 py-3 border border-red-400 bg-white text-red-400 rounded-full shadow-sm hover:border-red-700  hover:text-red-700 transition"
                >
                    <div className="flex items-center justify-start">
                        <Trash className="mr-2" />
                        <span>បោះបង់</span>
                    </div>

                </button>
                <button
                    onClick={() => router.push("/notes")}
                    className="w-36 px-6 py-3 border border-green-400 bg-white text-green-400 rounded-full shadow-sm hover:border-green-700  hover:text-green-700 transition"
                >
                    <div className="flex items-center justify-start">
                        <Check className="mr-2" /> 
                        <span>ទទួលយក</span>
                    </div>
                   
                </button>
            </div>
        </div>
    );
};

export default Playback;
