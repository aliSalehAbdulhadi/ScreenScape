'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { VscChromeClose } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import useClickOutside from '@/src/hooks/useClickOutside';
import GenreDropDownMenu from './GenreDropDownMenu/GenreDropDownMenu';
import NavbarButtons from './NavbarButtons/NavbarButtons';
import { useScrollY } from '@/src/hooks/useScrollY';
import BurgerList from './BurgerList.tsx/BurgerList';
import useWindowSize from '@/src/hooks/useWindowsSize';

const Navbar = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [firstSearch, setFirstSearch] = useState<boolean>(false);
  const [goBack, setGoBack] = useState(true);
  const [focusSearchBar, setFocusSearchBar] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const navBarRef = useClickOutside(() => {
    setFocusSearchBar(false);
  });

  const pathName = usePathname();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollY: any = useScrollY();
  const width = useWindowSize();

  useEffect(() => {
    if (focusSearchBar && inputRef.current) {
      inputRef?.current.focus();
    }
  }, [focusSearchBar]);

  useEffect(() => {
    if (searchText) {
      router.push('/search/sss');
      setFirstSearch(true);
    }
    if (!searchText && firstSearch && goBack) {
      router.back();
    }
  }, [router, searchText, firstSearch]);

  useEffect(() => {
    setGoBack(true);
  }, [pathName]);

  const showMessage = () => {
    setFocusSearchBar(true);
  };

  const keydownHandler = (e: any) => {
    if (e.key === 'k' && e.altKey) showMessage();
  };
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  return (
    <div
      className={`h-[4rem]  flex items-center  justify-between px-5 semiSm:px-10 sticky top-0 z-10 bg-primary ${
        scrollY > 50
          ? `${width > 1000 ? 'background-fade-bottom-exit shadow-md' : ''}`
          : `${width > 1000 ? 'background-fade-bottom-enter' : ''} `

      } `}
    >
      <div className="flex items-center justify-between w-full semiSm:w-fit">
        <div className="w-fit flex items-center">
          <div
            onClick={() => setBurgerOpen(!burgerOpen)}
            className=" semiSm:hidden"
          >
            <GiHamburgerMenu className="text-white w-5 h-5 xx:w-7 xxs:h-7 mr-3 xxs:mr-5" />
          </div>
          <Link
            onClick={() => {
              setSearchText('');
              setGoBack(false);
            }}
            href={'/'}
          >
            <Image
              src="/svg/logo/screenScapeLogo2.svg"
              height={45}
              width={45}
              alt="ScreenScape Logo"
              className="w-7 xx:w-8 semiSm:w-10 md:w-12"
            />
          </Link>
        </div>

        <form ref={navBarRef} className="relative semiSm:ml-10 ">
          <label
            htmlFor="searchBar"
            className={`${
              focusSearchBar || searchText ? 'hidden' : 'absolute'
            } left-2 top-[50%] translate-y-[-50%] text-[.65rem] mt-[1px] md:text-xs opacity-50 `}

          >
            Search...
          </label>
          <input
            ref={inputRef}
            onFocus={() => setFocusSearchBar(true)}
            onChange={(e) => setSearchText(e.target.value)}
            className="semiSm:rounded outline-none pl-3 w-[8rem]  xxs:w-[10rem] xs:w-[13rem] h-[1.75rem] md:w-[18rem] md:h-[2rem] border-[1px] border-white  bg-offWhite  text-sm"
            type="text"
            name="searchBar"
            id="searchBar"
            value={searchText}
          />

          <div
            onClick={() => setSearchText('')}
            className={`absolute right-1 top-[50%] translate-y-[-50%] cursor-pointer ${
              searchText ? '' : 'hidden'
            }`}
          >
            <VscChromeClose />
          </div>

          <div
            className={`absolute right-2 text-xs font-averia text-primary text-opacity-60 top-[50%] translate-y-[-50%] hidden semiSm:block ${
              focusSearchBar || searchText ? 'hidden' : ''
            }`}
          >
            Alt + K
          </div>
        </form>

        <div className="ml-3 semiSm:block hidden">
          <GenreDropDownMenu />
        </div>
      </div>

      <div className="hidden semiSm:block">
        <NavbarButtons />
      </div>
      <div
        className={`fixed inset-x-0 inset-y-[61px] ${
          burgerOpen ? '' : 'hidden'
        }`}
      >
        <BurgerList setBurgerOpen={setBurgerOpen} />
      </div>
    </div>
  );
};

export default Navbar;
