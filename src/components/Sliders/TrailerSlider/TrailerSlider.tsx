'use client';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import useWindowSize from '@/src/hooks/useWindowsSize';
import TrailerButtons from './TrailerButtons/TrailerButtons';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';

SwiperCore.use([Navigation, Autoplay]);

const TrailerSlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [advanceSlide, setAdvanceSlide] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  const [muteVideo, setMuteVideo] = useState<boolean>(true);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const images = [
    { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
    {
      url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
    },
    { url: '/images/ben-stiller-movie-poster-wallpaper-preview.jpg' },
    { url: '/images/x0pqq.jpg' },

    {
      url: '/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg',
    },
  ];

  const width = useWindowSize();

  useEffect(() => {
    if (advanceSlide) {
      swiper.slideNext();
      setAdvanceSlide(false);
    }
  }, [advanceSlide, swiper]);

  const handleOnEnd = () => {
    setAdvanceSlide(true);
  };

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {
        <Swiper
          observeParents={true}
          observer={true}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          pagination={false}
          scrollbar={{ draggable: true }}
          effect={'coverflow'}
          autoplay={false}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          slidesPerView={width > 1000 ? 2 : 1}
          onSlideChange={(e) => setActiveSlide(e.realIndex)}
          onSwiper={(s) => {
            setSwiper(s);
          }}
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
              <SwiperSlide
                key={image.url + i}
                className=" md:rounded-lg relative "
              >
                <div className={`relative rounded h-full`}>
                  {activeSlide === i ? (
                    <VideoPlayer
                      onEnd={handleOnEnd}
                      mute={muteVideo}
                      controls={false}
                      autoplay={true}
                      videoId="Tp_YZNqNBhw"
                    />
                  ) : (
                    <Image
                      width={2000}
                      height={1000}
                      src={image.url}
                      className=" object-fit md:rounded-lg "
                      alt="poster"
                    />
                  )}

                  <div className=" absolute top-0 left-0 h-full w-full">
                    <TrailerButtons
                      muteVideo={muteVideo}
                      setMuteVideo={setMuteVideo}
                      activeSlide={activeSlide}
                      i={i}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>

          <div className=" transition-all">
            <div
              onMouseEnter={() => setPrevArrow(true)}
              onMouseLeave={() => setPrevArrow(false)}
              ref={swiperImagePrevRef}
              className={
                showArrows && width > 1150
                  ? styles.customPrevArrowTrailer
                  : 'hidden'
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
              ref={swiperImageNextRef}
              className={
                showArrows && width > 1150
                  ? styles.customNextArrowTrailer
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

export default TrailerSlider;
