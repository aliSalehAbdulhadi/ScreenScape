import React from 'react';

const LoadingSkeleton = ({
  data,
  loading,
  height = 50,
}: {
  data: any;
  loading: boolean;
  height: number;
}) => {
  return (
    <div className="w-full">
      {loading ? (
        <div
          className={` rounded bg-placeholder animate-pulse `}
          style={{ height: `${height}px` }}
        ></div>
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default LoadingSkeleton;
