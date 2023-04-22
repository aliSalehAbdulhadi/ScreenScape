'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import LoadingCardsGrid from '../../LoadingComponent/LoadingCardsGrid/LoadingCardsGrid';

const DisplaySlider = lazy(
  () => import('../../Sliders/DisplaySlider/DisplaySlider')
);

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
    <div>
      {movieGenres.map((genre, i) => {
        // to re-render the component to hide the last line
        i++;
        if (slidersInView >= i) {
          return (
            <div
              key={genre.id + i}
              className=" mt-5 semiSm:mt-10 w-[100%]  flex flex-col transition-all"
            >
              <span className=" ml-5 semiSm:ml-10 text-opacity-75 semiSm:text-opacity-100 semiSm:text semiSm:text-xl md:text-2xl mb-3 text-secondary fade-in ">
                {genre.name}
              </span>

              <Suspense fallback={<LoadingCardsGrid />}>
                <div className=" transition-all ">
                  <DisplaySlider
                    index={i}
                    setSlidersInView={setSlidersInView}
                    slidersInView={slidersInView}
                  />
                </div>
              </Suspense>

              <div
                className={`h-[1px] w-[80%] bg-secondary mt-2 md:mt-10 self-center bg-opacity-50 ${
                  movieGenres.length === i ? 'hidden' : ''
                }`}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default DisplayComp;
