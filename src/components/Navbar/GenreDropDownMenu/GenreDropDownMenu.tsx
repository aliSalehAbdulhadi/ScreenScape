import useClickOutside from '@/src/hooks/useClickOutside';
import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const GenreDropDownMenu = () => {
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
    { title: 'TV Movie', value: 10770 },
    { title: 'Thriller', value: 53 },
    { title: 'War', value: 10752 },
    { title: 'Western', value: 37 },
  ];

  const genreRef = useClickOutside(() => {
    setOpen(false);
  });

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
        }  fixed inset-0 w-full left-1/2 transform -translate-x-1/2 py-2 rounded flex flex-col items-center justify-center bg-primary bg-opacity-60 bg-blur transition-all z-10`}
      >
        <div ref={genreRef}>
          {movieGenres.map((genre) => {
            return (
              <div
                className="py-2 cursor-pointer text-lg text-center  hover:text-opacity-80 text-white transition-all"
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
  );
};

export default GenreDropDownMenu;
