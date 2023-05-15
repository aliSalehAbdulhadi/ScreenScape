'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import DisplaySlider from '../../Sliders/DisplaySlider/DisplaySlider';
import LazyLoading from '../../WrapperComponents/LazyLoading/LazyLoading';

const DisplayComp = ({ data }: { data: any }) => {
  const [slidersInView, setSlidersInView] = useState<number>(3);

  useEffect(() => {
    window.addEventListener('unload', () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div className="flex flex-col">
      {data.map(
        (slide: { displaySliderResponse: any; name: string }, i: any) => {
          if (slidersInView >= i - 1) {
            return (
              <LazyLoading
                key={slide?.name}
                perView={3}
                index={i}
                setItemsInView={setSlidersInView}
                itemsInView={slidersInView}
              >
                <div className=" mt-5 semiSm:mt-10 w-[100%]  flex flex-col transition-all">
                  <div className="flex items-center justify-between">
                    <span className=" ml-5 semiSm:ml-10 text-opacity-75 semiSm:text-opacity-100 semiSm:text semiSm:text-xl md:text-2xl mb-3 text-secondary fade-in ">
                      {slide.name}
                    </span>
                    <div
                      className={`h-[1px] xxxs:w-[40%] semiSm:w-[65%] bg-secondary self-center bg-opacity-50 fade-in mr-5 semiSm:mr-10 mb-2 ${
                        slide.name === 'Action' ? 'hidden' : ''
                      }`}
                    />
                  </div>
                  <div className=" transition-all ">
                    <DisplaySlider
                      index={i}
                      data={slide.displaySliderResponse}
                    />
                  </div>
                </div>
              </LazyLoading>
            );
          }
        }
      )}

      <div
        onClick={() => setSlidersInView(slidersInView + 4)}
        className={`self-center  ${
          slidersInView < data.length ? '' : 'hidden'
        } py-1 px-1 rotate-180 rounded-full bg-white bg-opacity-10 text-white border-[2px] border-opacity-10 border-white text-xs text-opacity-70 mt-5 cursor-pointer hover:opacity-90 transition-all`}
      >
        <IoIosArrowUp className="h-5 w-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default DisplayComp;
