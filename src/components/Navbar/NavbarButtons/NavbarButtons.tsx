import Link from 'next/link';
import React from 'react';

const NavbarButtons = () => {
  return (
    <div className="text-offWhite flex items-center justify-between font-[500] text-[12px] md:text-[14px] ">
      <div className="flex items-center mr-5">
        <Link
          href={'/'}
          className="mr-3 cursor-pointer hover:text-opacity-80  transition-all"
        >
          Home
        </Link>
        <div className="mr-3 cursor-pointer hover:text-opacity-80  transition-all">
          Movies
        </div>
        <div className="mr-3 cursor-pointer hover:text-opacity-80  transition-all">
          TV Shows
        </div>
        <div className="mr-3 cursor-pointer hover:text-opacity-80  transition-all">
          Actors
        </div>
        <div className="mr-3 cursor-pointer hover:text-opacity-80  transition-all">
          My List
        </div>
      </div>

      <div className="flex items-center">
        <div className="cursor-pointer hover:text-opacity-80  transition-all">
          Sign Up
        </div>
        <span className="mx-3">|</span>
        <div className="cursor-pointer hover:text-opacity-80  transition-all">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default NavbarButtons;
