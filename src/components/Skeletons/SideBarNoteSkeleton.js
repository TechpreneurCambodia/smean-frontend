
const SideBarNoteSkeleton = () => {
  return (
    <div className="p-4">
      <div className="collapse collapse-arrow mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-semibold skeleton w-24 h-6"></div> {/* Title Skeleton */}
        <div className="collapse-content">
          {[1, 2, 3].map((index) => (
            <div key={index} className="py-2">
              <div className="skeleton w-32 h-5"></div> {/* Item Skeleton */}
            </div>
          ))}
        </div>
      </div>

      <div className="collapse collapse-arrow mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-semibold skeleton w-32 h-6"></div> {/* Title Skeleton */}
        <div className="collapse-content">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="py-2">
              <div className="skeleton w-32 h-5"></div> {/* Item Skeleton */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarNoteSkeleton;