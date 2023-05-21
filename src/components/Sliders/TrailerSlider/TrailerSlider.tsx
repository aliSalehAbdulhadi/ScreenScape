'use client';

import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';
import { memo, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import useWindowSize from '@/src/hooks/useWindowsSize';
import TrailerSliderButtons from './TrailerSliderButtons/TrailerSliderButtons';
import AutoPlaySlide from './AutoPlaySlide/AutoPlaySlide';
import { imageQualityLargeScreen } from '@/src/global/globalVariables';

SwiperCore.use([Navigation, Autoplay]);

const TrailerSlider = ({ data = [] }: { data: [] }) => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [advanceSlide, setAdvanceSlide] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  const [muteVideo, setMuteVideo] = useState<boolean>(true);
  const [reloadVideo, setReloadVideo] = useState<boolean>(false);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const width = useWindowSize();

  useEffect(() => {
    setReloadVideo(false);
  }, [reloadVideo]);

  useEffect(() => {
    if (advanceSlide) {
      swiper.slideNext();
      setAdvanceSlide(false);
    }
  }, [advanceSlide, swiper]);

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
          className=" overflow-hidden"
          style={swiperStyle}
          // @ts-ignore
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 2,
            loadOnTransitionStart: true,
          }}
          autoplay={width <= 1150 ? { delay: 5000 } : false}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          pagination={false}
          scrollbar={{ draggable: true }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          slidesPerView="auto"
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
            {data?.map((title: any, i: any) => {
              return (
                i <= 8 && (
                  <SwiperSlide
                    key={title?.id}
                    className="!max-w-[60rem]  relative"
                  >
                    <div className={`rounded`}>
                      {activeSlide === i && width > 1150 ? (
                        <AutoPlaySlide
                          setAdvanceSlide={setAdvanceSlide}
                          setIsVideoReady={setIsVideoReady}
                          muteVideo={muteVideo}
                          reloadVideo={reloadVideo}
                          imageUrl={title?.backdrop_path}
                          trailer={title?.trailer}
                        />
                      ) : (
                        <Image
                          quality={imageQualityLargeScreen}
                          width={1000}
                          height={500}
                          src={`https://image.tmdb.org/t/p/original/${title?.backdrop_path}`}
                          className=" object-fit md:rounded "
                          alt="poster"
                          loading="lazy"
                        />
                      )}
                      <div
                        className={`absolute bottom-[-5px]  left-0 h-full w-full `}
                      >
                        <TrailerSliderButtons
                          title={title.title}
                          mediaType={title?.first_air_date ? 'tv' : 'movie'}
                          id={title.id}
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
                )
              );
            })}
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

export default memo(TrailerSlider);
