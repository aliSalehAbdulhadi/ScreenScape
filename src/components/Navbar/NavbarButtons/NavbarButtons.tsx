import Link from 'next/link';
import React from 'react';

const NavbarButtons = () => {
  return (
    <div className="text-offWhite flex items-center justify-between text-[14px] font-[500]">
      <div className="flex items-center">
        <Link
          href={'/'}
          className="mr-3 cursor-pointer hover:text-opacity-80 text-offWhite transition-all"
        >
          Home
        </Link>
        <div className="mr-3 cursor-pointer hover:text-opacity-80 text-offWhite transition-all">
          Movies
        </div>
        <div className="mr-3 cursor-pointer hover:text-opacity-80 text-offWhite transition-all">
          TV Shows
        </div>
        <div className="mr-3 cursor-pointer hover:text-opacity-80 text-offWhite transition-all">
          Actors
        </div>
        <div className="mr-3 cursor-pointer hover:text-opacity-80 text-offWhite transition-all">
          My List
        </div>
      </div>

      <div className="flex items-center">
        <div className="cursor-pointer hover:text-opacity-80 text-offWhite transition-all">
          Sign Up
        </div>
        <span className="mx-3">|</span>
        <div className="cursor-pointer hover:text-opacity-80 text-offWhite transition-all">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default NavbarButtons;
