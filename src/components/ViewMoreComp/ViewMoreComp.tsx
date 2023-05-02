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

const ViewMoreComp = ({
  titles,
  isMovies,
}: {
  titles: any[];
  isMovies: boolean;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [slidersInView, setSlidersInView] = useState<number>(20);

  const dataObject = (data: any) => {
    let posterUrl = data?.poster_path;
    let title = isMovies ? data?.title : data?.name;
    let releaseDate = isMovies ? data?.release_date : data?.first_air_date;
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
      className={`h-full w-[192px]  rounded  ${
        titles?.length < 10 && 'hidden'
      }`}
    >
      <div
        onClick={() => setOpen(true)}
        className="relative overflow-hidden flex items-center justify-center h-full rounded w-full cursor-pointer"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${titles[11]?.poster_path}`}
          width={150}
          height={250}
          alt="View more"
          className={`h-full w-full object-fit `}
        />

        <div className="absolute top-0 left-0 h-full w-full  bg-primary bg-blur bg-opacity-90 rounded overflow-hidden"></div>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white bg-blur bg-opacity-10 text-opacity-80 font-bold text-white rounded overflow-hidden transition-all hover:bg-opacity- hover:text-opacity-70  hover:pl-8 ">
          View More
          <IoIosArrowUp className="rotate-90 h-5 w-5 ml-2 " />
        </div>
      </div>

      <Modal
        data={titles}
        width={80}
        animationCloseTime={190}
        open={open}
        setOpen={setOpen}
      >
        <GridComp className="relative">
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
                        href={`/browse/${isMovies ? 'movie/' : 'tv/'}${
                          title?.id
                        }`}
                        className="flex flex-col  cursor-pointer bg-primary  h-[23rem] w-[12rem] rounded overflow-hidden"
                      >
                        <PosterCard
                          index={i}
                          imageUrl={dataObject(title)?.posterUrl}
                          title={dataObject(title)?.title}
                          releaseDate={dataObject(title)?.releaseDate}
                          isAdult={dataObject(title)?.isAdult}
                          rating={dataObject(title)?.voteAverage * 10}
                        />
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