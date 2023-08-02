'use client';

import { useEffect } from 'react';
import DisplaySlider from '../../Sliders/DisplaySlider/DisplaySlider';
import LazyLoadComponent from '../../WrapperComponents/LazyLoadComponents/LazyLoadComponent';

const DisplayComp = ({ data }: { data: any }) => {
  useEffect(() => {
    window.addEventListener('unload', () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div className="flex flex-col">
      {data.map(
        (slide: { displaySliderResponse: any; name: string }, i: any) => {
          return (
            <LazyLoadComponent key={i} threshold={0} once={true}>
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
                  <DisplaySlider index={i} data={slide.displaySliderResponse} />
                </div>
              </div>
            </LazyLoadComponent>
          );
        }
      )}
    </div>
  );
};

export default DisplayComp;
