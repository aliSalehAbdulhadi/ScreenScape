'use client';

import { Suspense, useEffect, useState } from 'react';
import LoadingCard from '../../LoadingComponent/LoadingCard/LoadingCard';
import dynamic from 'next/dynamic';

const DisplaySlider = dynamic(
  () => import('../../Sliders/DisplaySlider/DisplaySlider')
);
const movieGenres = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 10749, name: 'Romance' },
];
const DisplayComp = () => {
  const [slidersInView, setSlidersInView] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    });
  }, [slidersInView]);

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
              key={genre.id}
              className=" mt-5 semiSm:mt-10 w-[100%] max-h-[400px] flex flex-col transition-all"
            >
              <span className=" ml-5 semiSm:ml-10 text-opacity-75 semiSm:text-opacity-100 semiSm:text semiSm:text-xl md:text-2xl mb-3 text-secondary">
                {genre.name}
              </span>

              <Suspense fallback={<LoadingCard />}>
                <DisplaySlider
                  index={i}
                  setSlidersInView={setSlidersInView}
                  slidersInView={slidersInView}
                />
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

      {isLoading && <div>loading...</div>}
    </div>
  );
};

export default DisplayComp;
