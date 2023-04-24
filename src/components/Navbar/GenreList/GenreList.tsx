import useClickOutside from '@/src/hooks/useClickOutside';
import { useEffect, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import GenreCard from './GenreCard/GenreCard';
import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';

const GenreList = () => {
  const [genre, setGenre] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [hoverAnimation, setHoverAnimation] = useState<boolean>(false);

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
    { title: 'Thriller', value: 53 },
    { title: 'War', value: 10752 },
  ];

  const genreRef = useClickOutside(() => {
    setOpen(false);
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
        }  fixed inset-0 w-full left-1/2 transform -translate-x-1/2 py-2 rounded  bg-primary bg-opacity-90 bg-blur transition-all z-10 px-10 overflow-auto`}
      >
        <div className="fade-in pt-10 ">
          <GridComp title="Search by Genre" wide={true}>
            {movieGenres.map((genre, i) => {
              return (
                <DelayDisplay key={genre.value} delay={i * 50}>
                  <div
                    ref={genreRef}
                    className=" cursor-pointer  rounded overflow-hidden hover:text-opacity-80 text-white transition-all"
                    onClick={() => setGenre(genre.title)}
                  >
                    <GenreCard genre={genre} />
                  </div>
                </DelayDisplay>
              );
            })}
          </GridComp>
        </div>
      </div>
    </div>
  );
};

export default GenreList;
