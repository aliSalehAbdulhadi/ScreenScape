'use client';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Suspense, memo, useEffect, useRef, useState } from 'react';

import { MdOutlineArrowBackIos } from 'react-icons/md';
import dynamic from 'next/dynamic';
import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';
import useWindowSize from '@/src/hooks/useWindowsSize';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';

const DisplaySliderContent = dynamic(
  () => import('./DisplaySliderContent/DisplaySliderContent')
);

SwiperCore.use([Navigation]);

const DisplaySlider = ({ index, data }: { index: number; data: any }) => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [firstSlide, setFirstSlide] = useState<boolean>(false);
  const [slideChanging, setSlideChanging] = useState<boolean>(false);
  const [showPag, setShowPag] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [overFlowHidden, setOverFlowHidden] = useState<boolean>(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const hidedArrows = () => {
    return prevArrow || nextArrow || slideChanging || showArrows;
  };

  useEffect(() => {
    if (!overFlowHidden) {
      setTimeout(() => {
        setOverFlowHidden(true);
      }, 2000);
    }
  }, [index, overFlowHidden]);

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
    if (width >= 1000) {
      return 6.1;
    } else if (width >= 850) {
      return 5.1;
    } else if (width >= 640) {
      return 4.1;
    } else if (width >= 500) {
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
      className=" min-h-[6.5rem] xxxs:min-h-[7rem] sm:min-h-[7.6rem] semiSm:min-h-[8rem] xl:min-h-[8.7rem] xxl:min-h-[9.7rem] xxxl:min-h-[12rem]"
    >
      {
        <Swiper
          className={`!pl-5 semiSm:!pl-10 lg:!overflow-visible flex flex-col  h-full`}
          // @ts-ignore
          modules={[Pagination]}
          pagination={showPag}
          draggable={false}
          // @ts-ignore
          slidesPerGroup={parseInt(widthHandler())}
          spaceBetween={width > 1650 ? 3 : 10}
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
          // @ts-ignore
          momentum="false"
        >
          {data?.map((title: any, i: number) => {
            if (i <= 35) {
              return title?.backdrop_path === null ? (
                ''
              ) : (
                <SwiperSlide
                  onMouseEnter={() => setHoveredIndex(i)}
                  key={title?.id}
                  className={`hover:overflow-visible ${
                    overFlowHidden && 'overflow-hidden '
                  }`}
                >
                  <Suspense>
                    <DelayDisplay delay={i < 8 ? i * 100 : 0}>
                      <DisplaySliderContent
                        title={title}
                        index={i}
                        hoveredIndex={hoveredIndex}
                      />
                    </DelayDisplay>
                  </Suspense>
                </SwiperSlide>
              );
            }
          })}
          <div />
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

export default memo(DisplaySlider);
