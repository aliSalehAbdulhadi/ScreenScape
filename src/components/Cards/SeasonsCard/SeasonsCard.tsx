import { checkDataAvailability } from '@/src/helper/checkDataAvailability';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { SlPicture } from 'react-icons/sl';

const SeasonsCard = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-row  my-5 w-full shadow-lg rounded overflow-hidden bg-white bg-opacity-10 cursor-pointer hover:bg-opacity-[0.09] transition-all">
      <div className="w-[180px] h-[250px]">
        {data?.poster_path ? (
          <Image
            width={250}
            height={180}
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            alt="Season"
            className="h-[250px] w-[180px] rounded-l"
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
          <span className="font-semibold text-xl mb-2">{data?.name}</span>
          <div className="mb-2 font-semibold">
            <span>{moment(data?.air_date).format('YYYY')}</span>
            <span className="mx-2">|</span>
            <span>{data?.episodes?.length} Episodes</span>
          </div>
        </div>
        <div className="mr-2 max-h-[10rem] overflow-y-auto scrollBar">
          {checkDataAvailability(data?.overview)}
        </div>
      </div>
    </div>
  );
};

export default SeasonsCard;
