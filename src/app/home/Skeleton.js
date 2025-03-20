export const SkeletonLoading = () => {
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="text-3xl font-bold mb-4 skeleton w-64 h-8 mx-auto"></div> {/* Welcome Message Skeleton */}
            <div className="text-center text-gray-600 mb-6">
                <div className="skeleton w-full h-4 mb-2"></div>
                <div className="skeleton w-3/4 h-4 mx-auto"></div>
                <div className="skeleton w-1/2 h-4 mx-auto mt-2"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <div className="btn btn-lg loading rounded-full"></div> {/* Record Audio Button Skeleton */}
                <div className="btn btn-lg loading"></div> {/* Upload File Button Skeleton */}
            </div>
        </div>
    </div>
}