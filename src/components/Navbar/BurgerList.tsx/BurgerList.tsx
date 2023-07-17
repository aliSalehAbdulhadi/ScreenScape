'use client';

import Link from 'next/link';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

const BurgerList = ({
  closeAnimation,
  setBurgerOpen,
  setCloseAnimation,
}: {
  closeAnimation: boolean;
  setBurgerOpen: Dispatch<SetStateAction<boolean>>;
  setCloseAnimation: Dispatch<SetStateAction<boolean>>;
}) => {
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

  useEffect(() => {
    if (closeAnimation) {
      setTimeout(() => {
        setBurgerOpen(false);
        setCloseAnimation(false);
      }, 190);
    }
  }, [closeAnimation, setBurgerOpen, setCloseAnimation]);

  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Movies',
      link: '/movie',
    },
    {
      name: 'Tv Shows',
      link: '/tv-shows',
    },
    {
      name: 'Actors',
      link: '/actors',
    },
    {
      name: 'My List',
      link: '/my-list',
    },
  ];

  return (
    <div className="w-full flex text-offWhite text-opacity-75 text-sm sm:text-base">
      <div
        className={`pl-5 pt-5 font-[500] burgerOpenAnimation  bg-primary w-[50vw] overflow-scroll scrollBar h-[100vh]  sm:w-[35vw] md:w-[30vw] ${
          closeAnimation ? 'burgerCloseAnimation' : ''
        }`}
      >
        <div className="flex flex-col">
          <Link
            onClick={() =>
              setTimeout(() => {
                setCloseAnimation(true);
              }, 300)
            }
            href="/auth"
          >
            <div className="">Log In</div>
          </Link>

          <div className="flex items-center justify-between my-5">
            <span className="text-secondary">Links</span>
            <div className="h-[1px] w-[50%] xxxs:w-[60%] bg-secondary bg-opacity-60 "></div>
          </div>

          {links.map((link) => (
            <Link
              onClick={() =>
                setTimeout(() => {
                  setCloseAnimation(true);
                }, 300)
              }
              key={link.name}
              href={link.link}
              className="mb-3"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center justify-between my-5">
            <span className="text-secondary">Genres</span>
            <div className="h-[1px] w-[50%] xxxs:w-[60%] bg-secondary bg-opacity-60 "></div>
          </div>

          <div className="flex flex-col xxxs:flex-row text-xs mb-5 w-fit">
            <span
              onClick={() => {
                setMediaType('movie');
                setBurgerOpen(true);
                setCloseAnimation(false);
              }}
              className={`mr-3 py-1 px-2  rounded cursor-pointer transition-all border-[1px] mb-2 xxxs:mb-0  ${
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
                setBurgerOpen(true);
                setCloseAnimation(false);
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

          <div className="h-[120vh]">
            {genres[mediaType === 'movie' ? 0 : 1].map((genre) => {
              return (
                <div
                  onClick={() =>
                    setTimeout(() => {
                      setCloseAnimation(true);
                    }, 300)
                  }
                  key={genre.id}
                  className="mb-3"
                >
                  <Link
                    href={`search/genre/${mediaType}/${genre?.id}-${genre?.name}`}
                  >
                    {genre.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        onClick={() => setCloseAnimation(true)}
        className={`w-[50vw] sm:w-[65vw] md:w-[70vw] burgerLayoutOpenAnimation bg-primary bg-opacity-80 burger-blur ${
          closeAnimation ? 'burgerLayoutCloseAnimation' : ''
        }`}
      />
    </div>
  );
};

export default BurgerList;
