'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import useClickOutside from '@/src/hooks/useClickOutside';
import NavbarButtons from './NavbarButtons/NavbarButtons';
import { useScrollY } from '@/src/hooks/useScrollY';
import useWindowSize from '@/src/hooks/useWindowsSize';
import { GrFormClose } from 'react-icons/gr';

const BurgerList = lazy(() => import('./BurgerList.tsx/BurgerList'));
const GenreList = lazy(() => import('./GenreList/GenreList'));

const Navbar = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [firstSearch, setFirstSearch] = useState<boolean>(false);
  const [goBack, setGoBack] = useState(true);
  const [focusSearchBar, setFocusSearchBar] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);
  const [prevPages, setPrevPages] = useState<string[]>([]);

  const navBarRef = useClickOutside(() => {
    setFocusSearchBar(false);
  });

  const pathName = usePathname();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollY: any = useScrollY();
  const width = useWindowSize();

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [burgerOpen]);

  useEffect(() => {
    if (focusSearchBar && inputRef.current) {
      inputRef?.current.focus();
    }
  }, [focusSearchBar]);

  function handleGoBack() {
    const prevPage = prevPages[prevPages.length - 1];
    setPrevPages((prev) => prev.slice(0, prev.length - 1));
    if (prevPages?.length < 1) {
      router?.push('/');
    } else {
      router?.push(prevPage);
    }
  }

  useEffect(() => {
    if (searchText) {
      router?.push(`/search/query/all/${searchText}`);
    }

    if (searchText && !pathName?.includes('search')) {
      setPrevPages((prev) => [...prev, pathName]);
      setFirstSearch(true);
    }

    if (!searchText && firstSearch && goBack) {
      handleGoBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeBurgerHandler = () => {
    if (burgerOpen) {
      setCloseAnimation(true);
      setTimeout(() => {
        setBurgerOpen(false);
      }, 190);
    } else {
      setBurgerOpen(true);
      setCloseAnimation(false);
    }
  };

  return (
    <div
      className={`h-[4rem]  flex items-center  justify-between px-5 semiSm:px-10 sticky top-0  bg-primary z-[4] ${
        scrollY > 50
          ? `${width > 865 ? 'background-fade-bottom-exit shadow-md' : ''}`
          : `${width > 865 ? 'background-fade-bottom-enter' : ''} `
      } `}
    >
      <div className="flex items-center justify-between w-full semiSm:w-fit">
        <div className="w-fit flex items-center">
          <div onClick={closeBurgerHandler} className=" semiSm:hidden">
            <GiHamburgerMenu className="text-white w-5 h-5 xx:w-7 xxxs:h-7 mr-3 xxxs:mr-5" />
          </div>
          <Link
            onClick={() => {
              setSearchText('');
              setGoBack(false);
            }}
            href={'/'}
          >
            <div className=" text-4xl xxxs:text-[2.8rem] h-fit text-secondary flex items-center font-averia tracking-tighter">
              <div>S</div>
              <div className="mt-2 ">S</div>
            </div>
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
            className="semiSm:rounded outline-none pl-3 w-[8rem]  xxxs:w-[10rem] xs:w-[13rem] h-[1.75rem] md:w-[18rem] md:h-[2rem] border-[1px] border-white  bg-offWhite  text-sm"
            type="text"
            name="searchBar"
            id="searchBar"
            value={searchText}
          />

          <div
            onClick={() => setSearchText('')}
            className={`absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer ${
              searchText ? '' : 'hidden'
            }`}
          >
            <GrFormClose size={22} />
          </div>

          <div
            className={`absolute right-2 text-xs font-averia text-primary text-opacity-60 top-[50%] translate-y-[-50%] hidden semiSm:block ${
              focusSearchBar || searchText ? 'semiSm:hidden' : ''
            }`}
          >
            Alt + K
          </div>
        </form>

        <div className="ml-3 semiSm:block hidden">
          <Suspense>
            <GenreList open={open} setOpen={setOpen} />
          </Suspense>
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
        <Suspense>
          <BurgerList
            closeAnimation={closeAnimation}
            setCloseAnimation={setCloseAnimation}
            setBurgerOpen={setBurgerOpen}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
