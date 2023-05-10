'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { memo } from 'react';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import CreditsCard from '../../Cards/CreditsCard/CreditsCard';
import 'swiper/swiper-bundle.css';
import { dataObject } from '@/src/global/globalVariables';

const CardSlider = ({
  data,
  mediaType,
  isCast,
}: {
  data: any[];
  mediaType: string;
  isCast: boolean;
}) => {
  const swiperStyle = {
    transform: 'translateZ(0)',
  };

  const breakpoints = {
    1750: { slidesPerView: 6.5, spaceBetween: 5 },
    1650: { slidesPerView: 5.8, spaceBetween: 5 },
    1550: { slidesPerView: 4.7, spaceBetween: 5 },
    1450: { slidesPerView: 4.4, spaceBetween: 5 },
    1350: { slidesPerView: 4.2, spaceBetween: 5 },
    1250: { slidesPerView: 4.1, spaceBetween: 5 },
    1150: { slidesPerView: 3.8, spaceBetween: 5 },
    1050: { slidesPerView: 3.6, spaceBetween: 5 },
    950: { slidesPerView: 3.4, spaceBetween: 5 },
    850: { slidesPerView: 3.3, spaceBetween: 5 },
    750: { slidesPerView: 3.2, spaceBetween: 5 },
    600: {
      slidesPerView: 3.1,
      spaceBetween: 5,
    },
    550: {
      slidesPerView: 2.8,
      spaceBetween: 5,
    },
    500: {
      slidesPerView: 2.6,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2.3,
      spaceBetween: 5,
    },
    420: {
      slidesPerView: 2.1,
      spaceBetween: 5,
    },
    350: {
      slidesPerView: 1.9,

      spaceBetween: 5,
    },
    330: {
      slidesPerView: 1.6,
      spaceBetween: 5,
    },
    0: {
      slidesPerView: 1.4,
      spaceBetween: 5,
    },
  };

  return (
    <div className="mt-4 h-[25rem]">
      {
        <Swiper
          className="!pl-2 sm:!pl-5 "
          style={swiperStyle}
          // @ts-ignore
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 5,
            loadOnTransitionStart: true,
          }}
          slidesPerView="auto"
          spaceBetween={5}
        >
          <div>
            {data.map(
              (info, i) =>
                i <= 15 && (
                  <SwiperSlide className="!w-[12rem]" key={uuidv4()}>
                    {isCast ? (
                      <Link
                        href={`/person/${info?.id}`}
                        className="flex flex-col  cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
                      >
                        <CreditsCard
                          index={i}
                          imageUrl={info?.profile_path}
                          characterName={info?.character}
                          personName={info?.original_name}
                          job={info?.job}
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
                          releaseDate={dataObject(info, mediaType)?.releaseDate}
                          isAdult={dataObject(info, mediaType)?.isAdult}
                          rating={dataObject(info, mediaType)?.voteAverage * 10}
                          mediaType={mediaType}
                        />
                      </Link>
                    )}
                  </SwiperSlide>
                )
            )}
          </div>
        </Swiper>
      }
    </div>
  );
};

export default memo(CardSlider);
