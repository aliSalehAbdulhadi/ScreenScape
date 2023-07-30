import React from 'react';

const LoadingSkeleton = ({
  data,
  loading,
  height = 50,
  width,
}: {
  data: any;
  loading: boolean;
  height: number;
  width?: number;
}) => {
  return (
    <div className="w-full">
      {loading ? (
        <div
          className={` rounded bg-placeholder animate-pulse `}
          style={{
            height: `${height}px`,
            width: width !== undefined && width > 0 ? `${width}px` : '',
          }}
        ></div>
      ) : (
        <div>{data}</div>
      )}
    </div>
  );
};

export default LoadingSkeleton;
