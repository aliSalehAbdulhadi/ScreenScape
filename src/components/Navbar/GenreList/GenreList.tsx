'use client';

import useClickOutside from '@/src/hooks/useClickOutside';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import GenreCard from './GenreCard/GenreCard';
import GridComp from '../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';
import Link from 'next/link';

const GenreList = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);
  const [hoverAnimation, setHoverAnimation] = useState<boolean>(false);
  const [mediaType, setMediaType] = useState<string>('movie');

  const movieGenres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  const tvGenres = [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' },
  ];
  const genres = [movieGenres, tvGenres];

  const genreRef = useClickOutside(() => {
    if (open) {
      setCloseAnimation(true);
      setTimeout(() => {
        setOpen(false);
        setCloseAnimation(false);
      }, 190);
    }
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [open]);

  return (
    <div className="text-offWhite">
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHoverAnimation(true)}
        onMouseLeave={() => setHoverAnimation(false)}
        className="py-[4px] px-[.20rem] w-[5rem] border-[1px]  border-white border-opacity-70  rounded flex items-center justify-center cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all relative"
      >
        <span className="text-xs md:text-sm ">Genres</span>
        <div
          className={`transition-all mt-[2px] ${
            hoverAnimation ? 'translate-x-1' : ''
          }`}
        >
          <IoMdArrowDropright />
        </div>
      </div>

      <div
        className={`${
          !open ? 'hidden' : ''
        }  fixed inset-0 w-full left-1/2 transform -translate-x-1/2 py-5 rounded  bg-primary bg-opacity-90 bg-blur transition-all px-10 overflow-y-auto`}
      >
        <div className={`fade-in pt-10 ${closeAnimation ? 'fade-out' : ''}`}>
          <GridComp
            center
            breakPointWidth={25}
            className="relative text-opacity-0"
          >
            <div
              ref={genreRef}
              className=" absolute top-[-1px] left-[50%] translate-x-[-50%] flex items-center justify-center text-xs xs:text-sm "
            >
              <span
                onClick={() => {
                  setMediaType('movie');
                  setOpen(true);
                }}
                className={`mr-3 py-1 px-2  rounded cursor-pointer transition-all border-[1px]  ${
                  mediaType === 'movie'
                    ? 'text-primary bg-secondary opacity-90 border-secondary'
                    : 'border-white border-opacity-80 text-white text-opacity-80'
                }`}
              >
                Movies
              </span>
              <span
                onClick={() => {
                  setMediaType('tv');
                  setOpen(true);
                }}
                className={`py-1 px-2 transition-all  rounded cursor-pointer border-[1px]   ${
                  mediaType === 'tv'
                    ? 'text-primary bg-secondary opacity-90 border-secondary'
                    : 'border-white border-opacity-80 text-white text-opacity-80'
                }`}
              >
                TV Shows
              </span>
            </div>
            {genres[mediaType === 'movie' ? 0 : 1].map((genre, i) => {
              return (
                <Link
                  key={genre.id}
                  href={`search/genre/${mediaType}/${genre?.id}-${genre?.name}`}
                >
                  <DelayDisplay delay={i * 50}>
                    <div className=" cursor-pointer  rounded overflow-hidden hover:text-opacity-80 text-white transition-all">
                      <GenreCard genre={genre} />
                    </div>
                  </DelayDisplay>
                </Link>
              );
            })}
          </GridComp>
        </div>
      </div>
    </div>
  );
};

export default GenreList;
