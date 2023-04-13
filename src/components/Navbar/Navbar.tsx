'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { VscChromeClose } from 'react-icons/vsc';
import useClickOutside from '@/src/hooks/useClickOutside';
import GenreDropDownMenu from './GenreDropDownMenu/GenreDropDownMenu';
import NavbarButtons from './NavbarButtons/NavbarButtons';
import { useScrollY } from '@/src/hooks/useScrollY';

const Navbar = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);
  const [firstSearch, setFirstSearch] = useState<boolean>(false);
  const [includesSearch, setIncludesSearch] = useState<boolean>(false);
  const [goBack, setGoBack] = useState(true);
  const [focusSearchBar, setFocusSearchBar] = useState(false);

  const navBarRef = useClickOutside(() => {
    setSearchBarFocus(false);
    setFocusSearchBar(false);
  });

  const pathName = usePathname();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollY: any = useScrollY();

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
    setIncludesSearch(pathName.includes('search'));
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
      className={`h-[7vh]  flex items-center  px-[2rem] sticky top-0 z-10 bg-primary ${
        scrollY > 50
          ? 'background-fade-bottom-exit shadow-md'
          : 'background-fade-bottom-enter'
      } ${
        pathName === '/' || includesSearch
          ? 'justify-between'
          : 'justify-center'
      }`}
    >
      <div className="flex items-center w-[37.5%]">
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
          />
        </Link>

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
            ref={inputRef}
            onFocus={() => setSearchBarFocus(true)}
            onChange={(e) => setSearchText(e.target.value)}
            className="rounded outline-none pl-3 ml-10 w-[18rem] h-[2rem] border-[1px] border-white  bg-offWhite  text-sm"
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
            className={`absolute right-2 text-xs font-averia text-primary text-opacity-60 top-[50%] translate-y-[-50%] ${
              focusSearchBar || searchText ? 'hidden' : ''
            }`}
          >
            Alt + K
          </div>
        </form>

        <div className="ml-3 ">
          <GenreDropDownMenu />
        </div>
      </div>

      <div className={`w-[25%]`}>
        <NavbarButtons />
      </div>
    </div>
  );
};

export default Navbar;
