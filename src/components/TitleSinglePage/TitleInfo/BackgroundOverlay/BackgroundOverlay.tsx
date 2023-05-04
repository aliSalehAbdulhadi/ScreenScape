import { ReactNode } from 'react';

const BackgroundOverlay = ({
  children,
  imageUrl,
}: {
  children: ReactNode;
  imageUrl: string;
}) => {
  return (
    <div className="w-full relative">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${imageUrl})`,
          height: '32.5rem',
        }}
        className=" background-image justify-between w-full relative  bg-no-repeat bg-cover  py-5 hidden semiSm:flex"
      >
        <div
          className={`w-full bg-secondary bg-opacity-40 absolute top-0 h-[32.5rem] pointer-events-none`}
        />
        <div className="w-full overlay  absolute top-0 h-[32.5rem] pointer-events-none"></div>
      </div>

      <div className=" semiSm:absolute top-5 flex items-center justify-between w-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundOverlay;
