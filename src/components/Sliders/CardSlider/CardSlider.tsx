'use client';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { memo, useRef } from 'react';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import CreditsCard from '../../Cards/CreditsCard/CreditsCard';
import 'swiper/swiper-bundle.css';
import { dataObject, delay } from '@/src/global/globalVariables';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import styles from '../../../../styles/swiper.module.scss';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';

const CardSlider = ({
  data,
  mediaType,
  isCast,
}: {
  data: any[];
  mediaType: string;
  isCast: boolean;
}) => {
  const swiperImagePrevRef = useRef<HTMLDivElement>(null);
  const swiperImageNextRef = useRef<HTMLDivElement>(null);

  const swiperStyle = {
    transform: 'translateZ(0)',
  };

  SwiperCore.use([Navigation]);

  const breakpoints = {
    default: {
      slidesPerGroup: 2,
    },

    865: {
      slidesPerGroup: 3,
    },

    1150: {
      slidesPerGroup: 4,
    },
    1280: {
      slidesPerGroup: 5,
    },
  };

  return (
    <div className="mt-4 h-[25rem]">
      {
        <Swiper
          className="!pl-2 sm:!pl-10 z-10 !overflow-visible"
          style={swiperStyle}
          // @ts-ignore
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 5,
            loadOnTransitionStart: true,
          }}
          breakpoints={breakpoints}
          slidesPerView="auto"
          spaceBetween={5}
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
            {data?.map(
              (info, i) =>
                i <= 15 && (
                  <SwiperSlide className="!w-[12rem]" key={uuidv4()}>
                    <DelayDisplay key={i} delay={delay(i)}>
                      {isCast ? (
                        <Link
                          href={`/person/${info?.id}`}
                          className="flex flex-col  cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
                        >
                          <CreditsCard
                            data={info}
                            index={i}
                            mediaType={mediaType}
                          />
                        </Link>
                      ) : (
                        <Link
                          href={`/browse/${mediaType}/${info?.id}`}
                          className="flex flex-col  cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
                        >
                          <PosterCard
                            index={i}
                            imageUrl={dataObject(info, mediaType)?.posterUrl}
                            title={dataObject(info, mediaType)?.title}
                            releaseDate={
                              dataObject(info, mediaType)?.releaseDate
                            }
                            rating={
                              dataObject(info, mediaType)?.voteAverage * 10
                            }
                            mediaType={mediaType}
                          />
                        </Link>
                      )}
                    </DelayDisplay>
                  </SwiperSlide>
                )
            )}
          </div>

          <div
            className={` transition-all hidden  ${
              data?.length < 7 ? 'hidden' : ' semiSm:block '
            }`}
          >
            <div
              ref={swiperImagePrevRef}
              className={`${styles.customPrevCardsSliderArrow} mr-[75px] border-[2px] border-white border-opacity-50 hover:border-opacity-80 transition-all p-1 rounded-full `}
            >
              <MdOutlineArrowBackIos className="opacity-90" size={16} />
            </div>
            <div
              ref={swiperImageNextRef}
              className={`${styles.customNextCardsSliderArrow} mr-8 ml-1 border-[2px] border-white border-opacity-50 hover:border-opacity-80 transition-all p-1 rounded-full `}
            >
              <MdOutlineArrowBackIos
                className={`rotate-180 opacity-90`}
                size={16}
              />
            </div>
          </div>
        </Swiper>
      }
    </div>
  );
};

export default memo(CardSlider);
