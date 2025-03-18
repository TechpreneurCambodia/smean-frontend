
const NoteListSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skeleton Card 1 */}
            <div className="card w-96 bg-gray-100 shadow-xl animate-pulse">
                <div className="card-body">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
            </div>

            {/* Skeleton Card 2 */}
            <div className="card w-96 bg-gray-100 shadow-xl animate-pulse">
                <div className="card-body">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
            </div>

            {/* Skeleton Card 3 */}
            <div className="card w-96 bg-gray-100 shadow-xl animate-pulse">
                <div className="card-body">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
            </div>

            {/* Skeleton Card 4 */}
            <div className="card w-96 bg-gray-100 shadow-xl animate-pulse">
                <div className="card-body">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
            </div>
        </div>

    );
}
export default NoteListSkeleton;