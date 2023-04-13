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
import MainButton from '../../Buttons/MainButton/MainButton';
import { GrCircleInformation } from 'react-icons/gr';
import { FaVolumeMute } from 'react-icons/fa';
import { IoReloadSharp } from 'react-icons/io5';
import PlusButton from '../../Buttons/PlusButton/PlusButton';
import Link from 'next/link';

SwiperCore.use([Navigation, Autoplay]);

const TrailerSlider = () => {
  const [nextArrow, setNextArrow] = useState<boolean>(false);
  const [prevArrow, setPrevArrow] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);

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
  ];

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
            depth: 150,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          slidesPerView={2}
          onSlideChange={(e) => setActiveSlide(e.realIndex)}
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
                className="w-[34rem] h-[30rem] overflow-hidden rounded-lg "
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={900}
                    height={400}
                    src={image.url}
                    className=" object-fill rounded-lg "
                    alt="poster"
                  />
                  <div className={`${activeSlide === i ? '' : 'hidden'} `}>
                    <div className=" absolute bottom-12 left-10 ">
                      <div>
                        <span className="text-white text-4xl font-bold">
                          Midway
                        </span>
                      </div>
                      <div className="mt-3 ">
                        <Link
                          href="/browse/sss"
                          className="flex items-center justify-center"
                        >
                          <MainButton className="bg-opacity-75">
                            <GrCircleInformation
                              className="mb-[1.5px] text-opacity-75"
                              size={20}
                            />
                            <span className="ml-2">More Info</span>
                          </MainButton>
                          <div className="ml-2 mb-[1.5px] ">
                            <PlusButton size={25} />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="absolute bottom-14 right-24 flex items-center justify-center">
                      <div className="border-[1px] p-[.45rem] rounded-full cursor-pointer mr-3 bg-black bg-opacity-30">
                        <IoReloadSharp size={18} />
                      </div>
                      <div className="border-[1px] p-[.45rem] rounded-full cursor-pointer bg-black bg-opacity-30">
                        <FaVolumeMute size={18} />
                      </div>
                    </div>
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

export default TrailerSlider;
