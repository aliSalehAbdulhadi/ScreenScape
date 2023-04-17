import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';

const BurgerList = ({
  setBurgerOpen,
}: {
  setBurgerOpen: Dispatch<SetStateAction<boolean>>;
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

  return (
    <div className="w-full flex text-offWhite text-opacity-75 ">
      <div className=" pl-5 font-[500]   bg-primary w-[50vw] overflow-scroll h-[100vh]  sm:w-[35vw] md:w-[30vw] ">
        <div className="flex flex-col">
          <div className="flex flex-col items-start ">
            <div className="cursor-pointer hover:text-opacity-80  transition-all mb-3">
              Sign Up
            </div>
            <div className="cursor-pointer hover:text-opacity-80  transition-all">
              Sign In
            </div>
          </div>

          <div className="h-[1px] bg-secondary bg-opacity-60  mr-5 my-3"></div>

          <Link
            href={'/'}
            className="cursor-pointer mb-3 hover:text-opacity-80  transition-all"
          >
            Home
          </Link>
          <div className="cursor-pointer mb-3 hover:text-opacity-80  transition-all">
            Movies
          </div>
          <div className="cursor-pointer mb-3 hover:text-opacity-80  transition-all">
            TV Shows
          </div>
          <div className="cursor-pointer mb-3 hover:text-opacity-80  transition-all">
            Actors
          </div>
          <div className="cursor-pointer mb-3 hover:text-opacity-80  transition-all">
            My List
          </div>

          <div className="h-[1px] bg-secondary bg-opacity-60  mr-5 my-3"></div>

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
        onClick={() => setBurgerOpen(false)}
        className="w-[50vw] sm:w-[65vw] md:w-[70vw] bg-primary bg-opacity-60 burger-blur "
      />
    </div>
  );
};

export default BurgerList;
