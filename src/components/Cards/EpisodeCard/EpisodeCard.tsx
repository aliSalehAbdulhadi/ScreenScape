import { checkDataAvailability } from '@/src/helper/checkDataAvailability';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SlPicture } from 'react-icons/sl';

const EpisodeCard = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-row  my-5 w-full shadow-lg rounded overflow-hidden bg-white bg-opacity-10 ">
      <div className="h-[200px] w-[200px] xxxs:w-[300px] xs:w-[350px] relative">
        {data?.still_path ? (
          <a
            href={`https://image.tmdb.org/t/p/original/${data?.still_path}`}
            target="_blank"
          >
            <Image
              width={350}
              height={200}
              src={`https://image.tmdb.org/t/p/original/${data?.still_path}`}
              alt="Season"
              className="h-[200px] w-[200px] xxxs:w-[300px] xs:w-[350px] rounded-l xs:object-fill object-cover transition-all hover:opacity-90"
              placeholder="blur"
              blurDataURL="/images/imagePlaceholder.png"
              loading="lazy"
            />
          </a>
        ) : (
          <div className="h-full bg-white bg-opacity-20 flex items-center justify-center">
            <SlPicture className="h-[3.5rem] w-[3.5rem] opacity-40" />
          </div>
        )}

        <a
          href={`https://image.tmdb.org/t/p/original/${data?.still_path}`}
          target="_blank"
        >
          <HiOutlineExternalLink
            className={`h-6 w-6 absolute bottom-1 right-1 cursor-pointer ${
              data?.still_path || 'hidden'
            }`}
          />
        </a>
      </div>

      <div className="w-[80%] flex flex-col justify-around mx-1 xs:ml-5 ">
        <div>
          <div className="text-sm xs:text-lg sm:text-xl font-semibold flex ">
            <span>{checkDataAvailability(data?.name)}</span>
          </div>
          <div className="text-xs xs:text-sm sm:text-base">
            <span>{moment(data?.air_date).format('MMM DD, YYYY')}</span>
            <span className="mx-2">|</span>
            <span>{`Season ${checkDataAvailability(
              data?.season_number
            )}`}</span>
          </div>

          <div className="mb-2 text-xs xs:text-sm sm:text-base">
            <span>{`Ep. ${checkDataAvailability(data?.episode_number)}`}</span>
            <span className="mx-2">|</span>
            <span className=" text-white text-opacity-80">
              {data?.runtime}m
            </span>
          </div>
        </div>
        <div className="text-xs xs:text-sm sm:text-base xs:mr-2 max-h-[7rem] overflow-y-auto scrollBar">
          {checkDataAvailability(data?.overview)}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
