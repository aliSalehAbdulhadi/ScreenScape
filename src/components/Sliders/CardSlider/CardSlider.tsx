'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import CreditsCard from '../../Cards/CreditsCard/CreditsCard';
import 'swiper/swiper-bundle.css';

const CardSlider = ({
  data,
  mediaType,
  isCast,
}: {
  data: any[];
  mediaType?: string;
  isCast: boolean;
}) => {
  const swiperStyle = {
    transform: 'translateZ(0)',
  };

  const dataObject = (data: any) => {
    let posterUrl = data?.poster_path;
    let title = mediaType === 'movie' ? data?.title : data?.name;
    let releaseDate =
      mediaType === 'movie' ? data?.release_date : data?.first_air_date;
    let endedDate = data?.last_air_date;
    let isAdult = data?.adult;
    let voteAverage = data?.vote_average;
    let overview = data?.overview;
    let seasons = data?.number_of_seasons;
    let episodes = data?.number_of_episodes;
    let seriesStatus = data?.status;
    return {
      posterUrl,
      title,
      releaseDate,
      endedDate,
      isAdult,
      voteAverage,
      overview,
      seasons,
      episodes,
      seriesStatus,
    };
  };
  return (
    <div className="mt-6 pl-1 h-[25rem]">
      {
        <Swiper
          style={swiperStyle}
          // @ts-ignore
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 2,
            loadOnTransitionStart: true,
          }}
          loop={true}
          slidesPerView={1.8}
          spaceBetween={5}
          centeredSlides={true}
        >
          <div>
            {data.map(
              (info, i) =>
                i <= 10 && (
                  <SwiperSlide className="w-fit" key={uuidv4()}>
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
                          imageUrl={dataObject(info)?.posterUrl}
                          title={dataObject(info)?.title}
                          releaseDate={dataObject(info)?.releaseDate}
                          isAdult={dataObject(info)?.isAdult}
                          rating={dataObject(info)?.voteAverage * 10}
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

export default CardSlider;
