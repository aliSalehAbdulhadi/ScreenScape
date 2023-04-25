'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ShowCertainLength = ({ children }: { children: ReactNode }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      setIsOverflowing(element.clientHeight < element.scrollHeight);
    }
  }, []);

  return (
    <div className="w-full flex  flex-col justify-center transition-all items-center">
      <div
        ref={ref}
        className={`w-full  transition-all ${
          showMore ? 'h-full' : 'h-[70vh] '
        } overflow-hidden`}
      >
        {children}
      </div>
      {isOverflowing ? (
        <div
          className={`w-full h-fit flex items-center justify-around self-center relative transition-all ${
            showMore ? 'mt-10' : ''
          }`}
        >
          <div className="h-[1px] w-[50%] mr-10 bg-secondary bg-opacity-60"></div>

          <div
            onClick={() => setShowMore(!showMore)}
            className={`${
              showMore ? 'rotate-[360deg]' : ''
            }  absolute top-[-35px] py-1 px-1 rotate-180 rounded-full bg-white bg-opacity-10 text-white border-[2px] border-opacity-10 border-white text-xs text-opacity-70 mt-5 cursor-pointer hover:opacity-90 transition-all`}
          >
            <IoIosArrowUp className="h-5 w-5 md:w-6 md:h-6" />
          </div>

          <div className="h-[1px] w-[50%] ml-10 bg-secondary bg-opacity-60"></div>
        </div>
      ) : null}
    </div>
  );
};

export default ShowCertainLength;
