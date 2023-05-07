import React from 'react';
import Image from 'next/image';
import { imageQualityLargeScreen } from '@/src/global/globalVariables';
import { IoIosArrowUp } from 'react-icons/io';

const BigCardButton = ({
  setOpen,
  mediaType,
  titles,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mediaType: string;
  titles: any[];
}) => {
  return (
    <div
      onClick={() => setOpen(true)}
      className="relative overflow-hidden  items-center justify-center h-full rounded w-full cursor-pointer hidden sm:flex"
    >
      <Image
        quality={imageQualityLargeScreen}
        src={`https://image.tmdb.org/t/p/original/${
          mediaType === 'actor'
            ? titles[11]?.profile_path
            : titles[11]?.poster_path
        }`}
        width={150}
        height={250}
        alt="View more"
        className={`h-full w-full object-cover `}
      />
      <div className="absolute top-0 left-0 h-full w-full  bg-primary bg-blur bg-opacity-90 rounded overflow-hidden"></div>
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white bg-blur bg-opacity-10 text-opacity-80 font-bold text-white rounded overflow-hidden transition-all hover:bg-opacity- hover:text-opacity-70  hover:pl-8 ">
        View More
        <IoIosArrowUp className="rotate-90 h-5 w-5 ml-2 " />
      </div>
    </div>
  );
};

export default BigCardButton;
