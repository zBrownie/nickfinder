export const SkeletonThemeSelection = () => {
  return (
    <div className="mb-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-2"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  );
};

export const SkeletonGenderSelection = () => {
  return (
    <div className="flex justify-between space-x-4 mb-6">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 rounded-lg w-full bg-gray-300 dark:bg-gray-600 animate-pulse"
        >
          <div className="h-8 w-8 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export const SkeletonDropdownList = () => {
  return (
    <div className="mb-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-2"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  );
};

export const SkeletonNameSelection = () => {
  return (
    <div className="mb-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-2"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  );
};

export const SkeletonSubmitButton = () => {
  return (
    <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
  );
};
