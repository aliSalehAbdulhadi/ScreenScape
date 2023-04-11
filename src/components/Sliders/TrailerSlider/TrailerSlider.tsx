'use client';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';

SwiperCore.use([Navigation, Autoplay]);

const TrailerSlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          pagination={showArrows ? true : false}
          scrollbar={{ draggable: true }}
          effect={'coverflow'}
          autoplay={false}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          slidesPerView={2}
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
            <SwiperSlide className="w-[34rem] h-[30rem] ">
              <Image
                width={900}
                height={400}
                src="/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg"
                className=" object-contain rounded "
                alt="poster"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[34rem] h-[30rem] ">
              <Image
                width={900}
                height={400}
                src="/images/ben-stiller-movie-poster-wallpaper-preview.jpg"
                className=" object-contain rounded "
                alt="poster"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[34rem] h-[32rem]">
              <Image
                width={900}
                height={400}
                src="/images/x0pqq.jpg"
                className=" object-contain rounded "
                alt="poster"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[34rem] h-[30rem]">
              <Image
                width={900}
                height={400}
                src="/images/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_f261718e-611c-4143-9a6c-9db2fa9bdf4d.jpg"
                className=" object-contain rounded "
                alt="poster"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[34rem] h-[30rem]">
              <Image
                width={900}
                height={400}
                src="/images/x0pqq.jpg"
                className=" object-contain rounded "
                alt="poster"
              />
            </SwiperSlide>
          </div>

          <div className=" transition-all">
            <div
              onMouseEnter={() => setPrevArrow(true)}
              onMouseLeave={() => setPrevArrow(false)}
              ref={swiperImagePrevRef}
              className={showArrows ? styles.customPrevArrow : 'hidden'}
            >
              <MdOutlineArrowBackIos
                className={`${prevArrow ? '' : 'opacity-80'}`}
                size={40}
              />
            </div>
            <div
              onMouseEnter={() => setNextArrow(true)}
              onMouseLeave={() => setNextArrow(false)}
              ref={swiperImageNextRef}
              className={showArrows ? styles.customNextArrow : 'hidden'}
            >
              <MdOutlineArrowBackIos
                className={`rotate-180  ${nextArrow ? '' : 'opacity-80'}`}
                size={40}
              />
            </div>
          </div>
        </Swiper>
      }
    </div>
  );
};

export default TrailerSlider;
