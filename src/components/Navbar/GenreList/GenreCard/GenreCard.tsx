import BackgroundOverlay from '@/src/components/TitleSinglePage/TitleInfo/BackgroundOverlay/BackgroundOverlay';
import React from 'react';

const images = [
  { url: '/images/genreImages/1.jpg' },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
  { url: '/images/x0pqq.jpg' },
  { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
  {
    url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
  },
];

const GenreCard = ({ genre }: { genre: { value: number; title: string } }) => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/genreImages/${String(genre.value)}.jpg)`,
      }}
      className=" w-[25rem] h-[10rem] rounded flex items-center  genre-background-image genre-background-image justify-center  relative  bg-no-repeat bg-cover  py-5"
    >
      <div className="z-[2] font-semibold text-xl text-white text-opacity-80  transition-all font-averia ">
        {genre.title}
      </div>

      <div
        className={`w-full bg-opacity-50 absolute top-0 pointer-events-none h-[10rem]`}
      ></div>
      <div className="w-full genre-overlay  absolute top-0 pointer-events-none h-[10rem]"></div>
    </div>
  );
};

export default GenreCard;
