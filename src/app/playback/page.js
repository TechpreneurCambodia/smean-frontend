"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";
import { useRouter } from "next/navigation";

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">ចាក់សំឡេងឡើងវិញ</h1>

            <div className="w-full max-w-md mb-4 rounded-lg overflow-hidden">
                <div ref={waveformRef}></div>
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={togglePlay}
                className="flex items-center justify-center w-24 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => router.push("/recordingpage")}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                >
                    បោះបង់
                </button>
                <button
                    onClick={() => router.push("/notes")}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                    ទទួលយក
                </button>
            </div>
        </div>
    );
};

export default Playback;
