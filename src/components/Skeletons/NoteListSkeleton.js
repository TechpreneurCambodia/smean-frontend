import React from 'react';

const NoteListSkeleton = () => {
  return (
    <div className="p-4"> 
      <h2 className="text-2xl font-semibold mb-4 skeleton w-48 h-8"></h2> {/* Title Skeleton */}

      {/* List Item Skeletons */}
      {[1, 2, 3].map((index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-start">
              <div className="btn btn-ghost btn-sm loading mr-2"></div> {/* Delete Button Skeleton */}
              <div>
                <div className="text-lg font-medium skeleton w-32 h-6 mb-1"></div> {/* Audio Name Skeleton */}
                <div className="text-sm skeleton w-48 h-4"></div> {/* Date/Time Skeleton */}
              </div>
            </div>
            <div className="flex items-start">
              <div className="btn btn-ghost btn-sm loading mr-2"></div> {/* Arrow Button Skeleton */}
              <div className="btn btn-ghost btn-sm loading"></div> {/* Edit Button Skeleton */}
            </div>
          </div>
          <div className="skeleton w-full h-12"></div> {/* Content Placeholder */}
        </div>
      ))}

      {/* Optional: Add a placeholder for a "Load More" button or similar */}
      <div className="flex justify-center mt-4">
        <div className="btn btn-ghost btn-lg loading"></div> {/* Load More Button Skeleton */}
      </div>
    </div>
  );
};

export default NoteListSkeleton;