import React, { memo, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import GridComp from '../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../Cards/PosterCard/PosterCard';
import Modal from '../WrapperComponents/Modal/Modal';
import LazyLoading from '../WrapperComponents/LazyLoading/LazyLoading';
import CreditsCard from '../Cards/CreditsCard/CreditsCard';
import useWindowSize from '@/src/hooks/useWindowsSize';
import { MdUnfoldMoreDouble } from 'react-icons/md';

const ViewMoreComp = ({
  titles,
  mediaType,
}: {
  titles: any[];
  mediaType: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [slidersInView, setSlidersInView] = useState<number>(20);
  const width = useWindowSize();

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
    <div
      className={`h-full sm:w-[192px]  rounded  ${
        titles?.length < 10 && 'hidden'
      }`}
    >
      {width > 640 ? (
        <div
          onClick={() => setOpen(true)}
          className="relative overflow-hidden  items-center justify-center h-full rounded w-full cursor-pointer hidden sm:flex"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              mediaType === 'actor'
                ? titles[11]?.profile_path
                : titles[11]?.poster_path
            }`}
            width={150}
            height={250}
            alt="View more"
            className={`h-full w-full object-cover `}
          />

          <div className="absolute top-0 left-0 h-full w-full  bg-primary bg-blur bg-opacity-90 rounded overflow-hidden"></div>
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white bg-blur bg-opacity-10 text-opacity-80 font-bold text-white rounded overflow-hidden transition-all hover:bg-opacity- hover:text-opacity-70  hover:pl-8 ">
            View More
            <IoIosArrowUp className="rotate-90 h-5 w-5 ml-2 " />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="text-xs font-bold  text-white text-opacity-70 sm:hidden flex items-center justify-center"
        >
          <span>View More</span>
          <MdUnfoldMoreDouble className="w-6 h-6" />
        </div>
      )}

      <Modal
        data={titles}
        width={80}
        animationCloseTime={190}
        open={open}
        setOpen={setOpen}
      >
        <GridComp breakPointWidth={12} className="relative">
          {titles?.map(
            (title: any, i: number) =>
              slidersInView >= i && (
                <LazyLoading
                  setSlidersInView={setSlidersInView}
                  slidersInView={slidersInView}
                  perView={20}
                  index={i}
                  key={uuidv4()}
                >
                  <div>
                    <DelayDisplay delay={i * 50}>
                      <Link
                        href={`/${mediaType !== 'actor' ? 'browse/' : ''}${
                          mediaType === 'actor' ? 'person' : mediaType
                        }/${title?.id}`}
                        className="flex flex-col  cursor-pointer bg-primary  h-[23rem] w-[12rem] rounded overflow-hidden"
                      >
                        {mediaType === 'actor' ? (
                          <CreditsCard
                            index={i}
                            imageUrl={title?.profile_path}
                            characterName={title?.character}
                            personName={title?.original_name}
                            job={title?.job}
                          />
                        ) : (
                          <PosterCard
                            index={i}
                            imageUrl={dataObject(title)?.posterUrl}
                            title={dataObject(title)?.title}
                            releaseDate={dataObject(title)?.releaseDate}
                            isAdult={dataObject(title)?.isAdult}
                            rating={dataObject(title)?.voteAverage * 10}
                          />
                        )}
                      </Link>
                    </DelayDisplay>
                  </div>
                </LazyLoading>
              )
          )}
        </GridComp>
      </Modal>
    </div>
  );
};

export default memo(ViewMoreComp);
