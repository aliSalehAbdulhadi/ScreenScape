'use client';

import Image from 'next/image';
import { useState } from 'react';
import useClickOutside from '@/src/hooks/useClickOutside';
import GenreDropDownMenu from './GenreDropDownMenu/GenreDropDownMenu';
import NavbarButtons from './NavbarButtons/NavbarButtons';

const Navbar = () => {
  const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const navBarRef = useClickOutside(() => {
    setSearchBarFocus(false);
  });

  return (
    <div className="h-[8vh]  flex items-center justify-between px-[3rem]">
      <div className="flex items-center w-[50%]">
        <Image
          src="/svg/logo/screenScapeLogo2.svg"
          height={50}
          width={50}
          alt="ScreenScape Logo"
        />

        <form ref={navBarRef} className="relative">
          <label
            htmlFor="searchBar"
            className={`${
              searchBarFocus || searchText ? 'hidden' : 'absolute'
            } left-[50px] top-[9px] text-xs opacity-50 `}
          >
            Search Title...
          </label>
          <input
            onFocus={() => setSearchBarFocus(true)}
            onChange={(e) => setSearchText(e.target.value)}
            className="rounded outline-none pl-3 ml-10 w-[18rem] h-[2rem] border-[1px] border-white  bg-offWhite  text-sm"
            type="text"
            name="searchBar"
            id="searchBar"
          />
        </form>

        <div className="ml-3 ">
          <GenreDropDownMenu />
        </div>
      </div>

      <div className="w-[25%]">
        <NavbarButtons />
      </div>
    </div>
  );
};

export default Navbar;
