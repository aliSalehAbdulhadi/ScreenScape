'use client';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import 'swiper/swiper-bundle.css';
import styles from '../../../../styles/swiper.module.scss';

SwiperCore.use([Navigation, Autoplay]);

const PosterSlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);

  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const images = [
    { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
    {
      url: '/images/716rIayrVWL._AC_SL1500_.jpg',
    },
    { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  ];

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={false}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
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
          <div className="">
            {images.map((image, i) => (
              <SwiperSlide key={image.url + i} className=" ">
                <Image
                  width={500}
                  height={500}
                  src={image.url}
                  alt="Actor Photo"
                  className="xs:rounded object-fit h-[28rem] xxs:h-[35rem]  sm:h-[30rem] w-full"
                />
              </SwiperSlide>
            ))}
          </div>

          <div className=" transition-all">
            <div
              onMouseEnter={() => setPrevArrow(true)}
              onMouseLeave={() => setPrevArrow(false)}
              ref={swiperImagePrevRef}
              className={showArrows ? styles.customPrevArrowTrailer : 'hidden'}
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
              className={showArrows ? styles.customNextArrowTrailer : 'hidden'}
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

export default PosterSlider;
