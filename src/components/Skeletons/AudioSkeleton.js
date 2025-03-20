
const SpeanAudioSkeleton = () => {
    return (
        <><div className="md:w-1/2 w-full p-4 border-r border-gray-200">
            <div className="text-xl font-semibold mb-4 skeleton w-32 h-6"></div> {/* Title Skeleton */}
            <div className="mb-4">
                <div className="text-lg font-medium skeleton w-48 h-5 mb-2"></div> {/* Subtitle Skeleton */}
                <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gray-200 h-2.5 rounded-full w-1/4"></div> {/* Progress Bar Placeholder */}
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <div className="btn loading btn-lg rounded-full"></div> {/* Play Button Skeleton */}
                </div>
            </div>
        </div><div className="md:w-1/2 w-full p-4">
                <div className="text-xl font-semibold mb-4 skeleton w-48 h-6"></div> {/* Title Skeleton */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-sm skeleton w-24 h-4"></div> {/* Time Skeleton */}
                        <div className="btn btn-ghost btn-sm loading"></div> {/* Arrow Button Skeleton */}
                    </div>
                    <div className="text-sm skeleton w-full h-4"></div> {/* Transcription Line Skeleton */}
                    <div className="text-sm skeleton w-3/4 h-4 mt-2"></div> {/* Transcription Line Skeleton */}
                </div>
            </div></>
    );
};

export default SpeanAudioSkeleton;