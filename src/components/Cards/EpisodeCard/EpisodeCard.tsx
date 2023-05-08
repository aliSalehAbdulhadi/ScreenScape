import { checkDataAvailability } from '@/src/helper/checkDataAvailability';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { SlPicture } from 'react-icons/sl';

const EpisodeCard = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-row  my-5 w-full shadow-lg rounded overflow-hidden bg-white bg-opacity-10 ">
      <div className="h-[200px] w-[350px]">
        {data?.still_path ? (
          <Image
            width={200}
            height={350}
            src={`https://image.tmdb.org/t/p/original/${data?.still_path}`}
            alt="Season"
            className="h-[200px] w-[350px] rounded-l"
            placeholder="blur"
            blurDataURL="/images/imagePlaceholder.png"
            loading="lazy"
          />
        ) : (
          <div className="h-full bg-white bg-opacity-20 flex items-center justify-center">
            <SlPicture className="h-[3.5rem] w-[3.5rem] opacity-40" />
          </div>
        )}
      </div>

      <div className="w-[80%] flex flex-col justify-around ml-5 ">
        <div>
          <div className="flex items-center">
            <div className="text-xl font-semibold flex items-center">
              <span>{checkDataAvailability(data?.episode_number)}-</span>
              <span className="ml-1">{checkDataAvailability(data?.name)}</span>
            </div>
            <span className="ml-5 text-sm text-white text-opacity-60">
              {data?.runtime}m
            </span>
          </div>
          <div className="mb-2">
            <span>{moment(data?.air_date).format('MMM DD, YYYY')}</span>
            <span className="mx-2">|</span>
            <span>{`Season ${checkDataAvailability(
              data?.season_number
            )}`}</span>
          </div>
        </div>
        <div className="mr-2 max-h-[7rem] overflow-y-auto scrollBar">
          {checkDataAvailability(data?.overview)}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
