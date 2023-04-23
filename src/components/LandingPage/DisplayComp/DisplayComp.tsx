'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import DisplaySlider from '../../Sliders/DisplaySlider/DisplaySlider';

const movieGenres = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 10749, name: 'Romance' },
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 10749, name: 'Romance' },
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 10749, name: 'Romance' },
];
const DisplayComp = () => {
  const [slidersInView, setSlidersInView] = useState<number>(3);

  useEffect(() => {
    window.addEventListener('unload', () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div className="flex flex-col">
      {movieGenres.map((genre, i) => {
        // to re-render the component to hide the last line
        i++;
        if (slidersInView >= i - 1) {
          return (
            <div
              key={genre.id + i}
              className=" mt-5 semiSm:mt-10 w-[100%]  flex flex-col transition-all"
            >
              <span className=" ml-5 semiSm:ml-10 text-opacity-75 semiSm:text-opacity-100 semiSm:text semiSm:text-xl md:text-2xl mb-3 text-secondary fade-in ">
                {genre.name}
              </span>

              <div className=" transition-all ">
                <DisplaySlider
                  index={i}
                  setSlidersInView={setSlidersInView}
                  slidersInView={slidersInView}
                />
              </div>

              <div
                className={`h-[1px] w-[80%] bg-secondary mt-2 md:mt-10 self-center bg-opacity-50 fade-in ${
                  movieGenres.length === i ? 'hidden' : ''
                }`}
              />
            </div>
          );
        }
      })}

      <div
        onClick={() => setSlidersInView(slidersInView + 4)}
        className={`self-center  ${
          slidersInView < movieGenres.length ? '' : 'hidden'
        } py-1 px-1 rotate-180 rounded-full bg-white bg-opacity-10 text-white border-[2px] border-opacity-10 border-white text-xs text-opacity-70 mt-5 cursor-pointer hover:opacity-90 transition-all`}
      >
        <IoIosArrowUp className="h-5 w-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default DisplayComp;
