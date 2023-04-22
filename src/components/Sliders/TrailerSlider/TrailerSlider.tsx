'use client';

import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Lazy,
} from 'swiper';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import useWindowSize from '@/src/hooks/useWindowsSize';
import TrailerSliderButtons from './TrailerSliderButtons/TrailerSliderButtons';

const VideoPlayer = lazy(() => import('../../VideoPlayer/VideoPlayer'));

SwiperCore.use([Navigation, Autoplay, Lazy]);

const TrailerSlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [advanceSlide, setAdvanceSlide] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  const [muteVideo, setMuteVideo] = useState<boolean>(true);
  const [reloadVideo, setReloadVideo] = useState<boolean>(false);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);
  const [isInTab, setIsInTab] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

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
    const handleVisibilityChange = () => {
      setIsInTab(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    setIsVideoVisible(inView);
  }, [inView]);

  useEffect(() => {
    setReloadVideo(false);
  }, [reloadVideo]);

  useEffect(() => {
    if (advanceSlide) {
      swiper.slideNext();
      setAdvanceSlide(false);
    }
  }, [advanceSlide, swiper]);

  const handleOnEnd = () => {
    setAdvanceSlide(true);
  };

  const handleOnReady = () => {
    setTimeout(() => {
      setIsVideoReady(true);
    }, 2800);
  };

  const swiperStyle = {
    transform: 'translateZ(0)',
  };

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {
        <Swiper
          style={swiperStyle}
          //@ts-ignore
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 2,
            loadOnTransitionStart: true,
          }}
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
                className=" md:rounded-lg relative"
              >
                <div className={`relative rounded`}>
                  {activeSlide === i && width > 1150 ? (
                    <Suspense
                      fallback={
                        <Image
                          width={1100}
                          height={500}
                          src={image.url}
                          className=" object-fit md:rounded-lg "
                          alt="poster"
                        />
                      }
                    >
                      <div ref={ref}>
                        <VideoPlayer
                          onEnd={handleOnEnd}
                          onReady={handleOnReady}
                          mute={muteVideo}
                          reloadVideo={reloadVideo}
                          playVideo={isVideoVisible || isInTab}
                          pauseVideo={!isVideoVisible || !isInTab}
                          controls={false}
                          autoplay={true}
                          videoId="Tp_YZNqNBhw"
                        />
                      </div>
                    </Suspense>
                  ) : (
                    <Suspense>
                      <Image
                        width={1100}
                        height={500}
                        src={image.url}
                        className=" object-fit md:rounded-lg "
                        alt="poster"
                        loading="lazy"
                      />
                    </Suspense>
                  )}

                  <div className={`absolute top-0  left-0 h-full w-full `}>
                    <TrailerSliderButtons
                      muteVideo={muteVideo}
                      setMuteVideo={setMuteVideo}
                      setReloadVideo={setReloadVideo}
                      activeSlide={activeSlide}
                      isVideoReady={isVideoReady}
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
