'use client';

import { memo, useEffect, useRef, useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import useWindowSize from '@/src/hooks/useWindowsSize';
import HeroSliderVideo from './HerSliderVideo/HeroSliderVideo';

const HeroSlider = ({ data = [] }: { data: [] }) => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [advanceSlide, setAdvanceSlide] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const width = useWindowSize();

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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          allowSlideNext={!isVideoPlaying}
          allowSlidePrev={!isVideoPlaying}
          modules={[EffectCoverflow, Pagination, Autoplay]}
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
                    <HeroSliderVideo
                      index={i}
                      activeSlide={activeSlide}
                      title={title}
                      setAdvanceSlide={setAdvanceSlide}
                      setIsVideoPlaying={setIsVideoPlaying}
                    />
                  </SwiperSlide>
                )
              );
            })}
          </div>

          <div className=" transition-all">
            <div
              onMouseEnter={() => setPrevArrow(true)}
              onMouseLeave={() => setPrevArrow(false)}
              onClick={() => {
                setIsVideoPlaying(false);
                setTimeout(() => {
                  swiper.slidePrev();
                }, 100);
              }}
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
              onClick={() => {
                setIsVideoPlaying(false);
                setTimeout(() => {
                  swiper.slideNext();
                }, 100);
              }}
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

export default memo(HeroSlider);
