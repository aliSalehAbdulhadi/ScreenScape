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
  const [genre, setGenre] = useState<string>('');

  const movieGenres = [
    { title: 'Action', value: 28 },
    { title: 'Adventure', value: 12 },
    { title: 'Animation', value: 16 },
    { title: 'Comedy', value: 35 },
    { title: 'Crime', value: 80 },
    { title: 'Documentary', value: 99 },
    { title: 'Drama', value: 18 },
    { title: 'Family', value: 10751 },
    { title: 'Fantasy', value: 14 },
    { title: 'History', value: 36 },
    { title: 'Horror', value: 27 },
    { title: 'Music', value: 10402 },
    { title: 'Mystery', value: 9648 },
    { title: 'Romance', value: 10749 },
    { title: 'Science Fiction', value: 878 },
    { title: 'TV Movie', value: 10770 },
    { title: 'Thriller', value: 53 },
    { title: 'War', value: 10752 },
    { title: 'Western', value: 37 },
  ];

  useEffect(() => {
    if (closeAnimation) {
      setTimeout(() => {
        setBurgerOpen(false);
        setCloseAnimation(false);
      }, 190);
    }
  }, [closeAnimation, setBurgerOpen, setCloseAnimation]);

  return (
    <div
      onClick={() => setCloseAnimation(true)}
      className="w-full flex text-offWhite text-opacity-75 "
    >
      <div
        className={`pl-5 pt-5 font-[500] burgerOpenAnimation  bg-primary w-[50vw] overflow-scroll scrollBar h-[100vh]  sm:w-[35vw] md:w-[30vw] ${
          closeAnimation ? 'burgerCloseAnimation' : ''
        }`}
      >
        <div className="flex flex-col">
          <Link href="/auth">
            <div className="">Log In</div>
          </Link>

          <div className="flex items-center justify-between my-5">
            <span className="text-secondary">Links</span>
            <div className="h-[1px] w-[50%] xxxs:w-[60%] bg-secondary bg-opacity-60 "></div>
          </div>

          <Link href={'/'} className="mb-3">
            Home
          </Link>
          <div className="mb-3">Movies</div>
          <div className="mb-3">TV Shows</div>
          <div className="mb-3">Actors</div>
          <div className="">My List</div>

          <div className="flex items-center justify-between my-5">
            <span className="text-secondary">Genres</span>
            <div className="h-[1px] w-[50%] xxxs:w-[60%] bg-secondary bg-opacity-60 "></div>
          </div>

          <div className="h-[120vh]">
            {movieGenres.map((genre) => {
              return (
                <div
                  className="mb-3"
                  key={genre.value}
                  onClick={() => setGenre(genre.title)}
                >
                  {genre.title}
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
