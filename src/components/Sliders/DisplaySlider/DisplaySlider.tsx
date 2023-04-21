'use client';
import SwiperCore, { Navigation, Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import useWindowSize from '@/src/hooks/useWindowsSize';

const HoverExpand = lazy(() => import('../../HoverExpand/HoverExpand'));

SwiperCore.use([Navigation, Lazy]);

const DisplaySlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [firstSlide, setFirstSlide] = useState<boolean>(false);
  const [slideChanging, setSlideChanging] = useState<boolean>(false);
  const [showPag, setShowPag] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

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
  ];

  const sliderElementIndex = useCallback((e: number) => {
    const startNum = e;
    let numbers = [startNum];

    for (let i = 1; i < 20; i++) {
      numbers.push(numbers[i - 1] + 6);
    }

    return numbers;
  }, []);

  const hidedArrows = () => {
    return prevArrow || nextArrow || slideChanging || showArrows;
  };

  useEffect(() => {
    setShowArrows(true);
  }, [hoveredIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      prevArrow || nextArrow || slideChanging ? '' : setShowArrows(false);
    }, 600);

    if (prevArrow || nextArrow || slideChanging) {
      clearTimeout(timer);
    }
  }, [hoveredIndex, nextArrow, prevArrow, showArrows, slideChanging]);

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
      onMouseEnter={() => {
        setShowArrows(true);
        setShowPag(true);
      }}
      onMouseLeave={() => {
        setShowArrows(false);
        setShowPag(false);
      }}
    >
      {
        <Swiper
          className={`!pl-5 xs:!pl-10 lg:!overflow-visible`}
          //@ts-ignore
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 2,
            loadOnTransitionStart: true,
          }}
          preloadImages={false}
          updateOnImagesReady={true}
          modules={[Pagination]}
          pagination={showPag}
          draggable={false}
          // @ts-ignore
          slidesPerGroup={parseInt(widthHandler())}
          spaceBetween={width > 1650 ? 0 : 10}
          loop={true}
          slidesPerView={widthHandler()}
          speed={width > 640 ? 700 : 400}
          onSliderFirstMove={() => firstSlideHandler()}
          onSlideChangeTransitionStart={() => setSlideChanging(true)}
          onSlideChangeTransitionEnd={() => setSlideChanging(false)}
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
          //@ts-ignore
          momentum="false"
        >
          {images.map((image, i) => {
            return (
              <SwiperSlide
                onMouseEnter={() => setHoveredIndex(i)}
                key={image.url + i}
                className={`relative lg:!overflow-hidden lg:hover:!overflow-visible my-element isClose`}
              >
                {width > 1150 ? (
                  <div>
                    <Image
                      width={300}
                      height={290}
                      src={image.url}
                      className=" object-contain md:rounded m-0 cursor-pointer "
                      alt="poster"
                      loading="lazy"
                    />
                    <Suspense>
                      <div
                        className={`absolute  top-[-40px] hover:top-[-90px]  h-[10rem] transition-all duration-300 ${
                          sliderElementIndex(0).includes(i) && 'hover:left-14'
                        } ${
                          sliderElementIndex(5).includes(i) && 'hover:right-14'
                        }`}
                      >
                        <HoverExpand
                          index={i}
                          hoveredIndex={hoveredIndex}
                          title={image}
                        />
                      </div>
                    </Suspense>
                  </div>
                ) : (
                  <Link href="/browse/sss">
                    <Image
                      width={300}
                      height={290}
                      src={image.url}
                      className=" object-contain md:rounded  m-0"
                      alt="poster"
                      loading="lazy"
                    />
                  </Link>
                )}
              </SwiperSlide>
            );
          })}

          <div className=" transition-all">
            <div
              onMouseEnter={() => {
                setPrevArrow(true);
                setShowArrows(true);
              }}
              onMouseLeave={() => setPrevArrow(false)}
              ref={swiperImagePrevRef}
              className={
                hidedArrows() && firstSlide && width > 1150
                  ? styles.customPrevArrow
                  : 'hidden'
              }
            >
              <MdOutlineArrowBackIos
                className={`${prevArrow ? '' : 'opacity-80'}`}
                size={30}
              />
            </div>
            <div
              onMouseEnter={() => {
                setNextArrow(true);
                setShowArrows(true);
              }}
              onMouseLeave={() => setNextArrow(false)}
              onClick={() => firstSlideHandler()}
              ref={swiperImageNextRef}
              className={
                hidedArrows() && width > 1150
                  ? styles.customNextArrow
                  : 'hidden'
              }
            >
              <MdOutlineArrowBackIos
                className={`rotate-180  ${nextArrow ? '' : 'opacity-80'}`}
                size={30}
              />
            </div>
          </div>
        </Swiper>
      }
    </div>
  );
};

export default DisplaySlider;
