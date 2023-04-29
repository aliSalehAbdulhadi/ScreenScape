import { ReactNode } from 'react';
import useWindowSize from '@/src/hooks/useWindowsSize';

const BackgroundOverlay = ({
  children,
  imageUrl,
}: {
  children: ReactNode;
  imageUrl: string;
}) => {
  const width = useWindowSize();

  return (
    <div className="w-full">
      {width > 864 ? (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${imageUrl})`,
          }}
          className="flex background-image justify-between w-full relative  bg-no-repeat bg-cover  py-5"
        >
          {children}
          <div
            className={`w-full bg-black bg-opacity-50 absolute top-0 h-[32.5rem] pointer-events-none `}
          ></div>
          <div className="w-full overlay  absolute top-0 h-[32.5rem] pointer-events-none "></div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default BackgroundOverlay;
