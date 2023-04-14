'use client';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import Link from 'next/link';
import useWindowSize from '@/src/hooks/useWindowsSize';

SwiperCore.use([Navigation]);

const DisplaySlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [firstSlide, setFirstSlide] = useState<boolean>(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const images = [
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
    { url: '/images/x0pqq.jpg' },
    { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
    {
      url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
    },
    { url: '/images/x0pqq.jpg' },
  ];

  const firstSlideHandler = () => {
    setTimeout(() => {
      setFirstSlide(true);
    }, 635);
  };

  const width = useWindowSize();

  const widthHandler = () => {
    if (width > 1000) {
      return 6.1;
    } else if (width > 850) {
      return 4.1;
    } else if (width > 640) {
      return 3.1;
    } else {
      return 2.2;
    }
  };

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {
        <div>
          <Swiper
            className={`!pl-5 xs:!pl-10`}
            modules={[Pagination]}
            pagination={showArrows ? true : false}
            draggable={false}
            // @ts-ignore
            slidesPerGroup={parseInt(widthHandler())}
            spaceBetween={0}
            loop={true}
            slidesPerView={widthHandler()}
            speed={700}
            onSliderFirstMove={() => firstSlideHandler()}
            allowSlidePrev={firstSlide ? true : false}
            navigation={{
              prevEl: swiperImagePrevRef.current,
              nextEl: swiperImageNextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = swiperImagePrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = swiperImageNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <div>
              {images.map((image, i) => (
                <SwiperSlide key={image.url + i}>
                  <Link href={'browse/sss'}>
                    <Image
                      width={300}
                      height={300}
                      src={image.url}
                      className=" object-contain md:rounded w-[290px] m-0 cursor-pointer"
                      alt="poster"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </div>

            <div className=" transition-all">
              <div
                onMouseEnter={() => setPrevArrow(true)}
                onMouseLeave={() => setPrevArrow(false)}
                ref={swiperImagePrevRef}
                className={
                  showArrows && firstSlide ? styles.customPrevArrow : 'hidden'
                }
              >
                <MdOutlineArrowBackIos
                  className={`${prevArrow ? '' : 'opacity-80'}`}
                  size={30}
                />
              </div>
              <div
                onMouseEnter={() => setNextArrow(true)}
                onMouseLeave={() => setNextArrow(false)}
                onClick={() => firstSlideHandler()}
                ref={swiperImageNextRef}
                className={showArrows ? styles.customNextArrow : 'hidden'}
              >
                <MdOutlineArrowBackIos
                  className={`rotate-180  ${nextArrow ? '' : 'opacity-80'}`}
                  size={30}
                />
              </div>
            </div>
          </Swiper>
        </div>
      }
    </div>
  );
};

export default DisplaySlider;
