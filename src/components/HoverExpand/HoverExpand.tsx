import Image from 'next/image';
import SingleGenres from '../TitleSinglePage/TitleInfo/SingleGenres/SingleGenres';
import PlusButton from '../Buttons/PlusButton/PlusButton';
import useWindowSize from '@/src/hooks/useWindowsSize';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { useState } from 'react';

const HoverExpand = ({ title }: { title: { url: string } }) => {
  const [first, setFirst] = useState(false);
  const width = useWindowSize();
  return (
    <div className="flex flex-col items-center justify-center my-10 cursor-pointer rounded lg:hover:scale-[1.5] xl:hover:scale-[1.3] opacity-0 lg:hover:opacity-100 hover:delay-[.5s] cardHover relative">
      <div>
        <Image
          width={300}
          height={300}
          src={title.url}
          className={`object-contain w-[290px]  m-0 cursor-pointer "
            alt="poster rounded-t`}
          alt="aaa"
        />
        {/* <VideoPlayer videoId="Tp_YZNqNBhw" setAdvanceSlide={setFirst} /> */}
      </div>

      <div
        className={`py-3 px-1 xl:px-3 rounded-b background-fade-bottom-enter   w-full hover:shadow-2xl absolute -bottom-[100px]  xl:-bottom-[110px]  `}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs xl:text-lg">Midway</span>
          <PlusButton size={width > 1300 ? 20 : 15} />
        </div>

        <div className="flex text-[.6rem] xl:text-xs my-3">
          <span className="mr-5 mt-[2px]">1h 26m</span>
          <div className="flex items-center ">
            <span className="border-[1px] py-[1px] px-[5px]  border-white border-opacity-75 mr-3 text-[.6rem] xl:text-xs">
              18+
            </span>
            <span>2019</span>
          </div>
        </div>
        <div>
          <SingleGenres
            underLine={false}
            className="flex items-center justify-between text-[.5rem] xl:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default HoverExpand;
