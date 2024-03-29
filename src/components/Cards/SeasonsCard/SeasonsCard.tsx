import { checkDataAvailability } from '@/src/helper/checkDataAvailability';
import Image from 'next/image';
import React from 'react';
import { SlPicture } from 'react-icons/sl';
import LoadingSkeleton from '../../LoadingComponent/LoadingSkeleton/LoadingSkeleton';

const SeasonsCard = ({
  data,
  seasonLoading,
}: {
  data: any;
  seasonLoading: boolean;
}) => {
  return (
    <div className="flex flex-row  my-5 w-full shadow-lg rounded overflow-hidden bg-white bg-opacity-10 cursor-pointer hover:bg-opacity-[0.09] transition-all">
      <div className="w-[180px] h-[200px] sm:h-[250px]">
        {data?.poster_path && !seasonLoading ? (
          <Image
            width={250}
            height={180}
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            alt="Season"
            className="h-[250px] w-[180px] rounded-l object-cover xs:object-fill"
            placeholder="blur"
            blurDataURL="/images/imagePlaceholder.png"
            loading="lazy"
          />
        ) : (
          <div
            className={`h-full bg-white bg-opacity-20 flex items-center justify-center ${
              seasonLoading && 'animate-pulse'
            }`}
          >
            <SlPicture
              className={`h-[3.5rem] w-[3.5rem] opacity-40  ${
                seasonLoading && 'hidden'
              }`}
            />
          </div>
        )}
      </div>

      <div className="w-[80%] flex flex-col justify-around ml-5 ">
        <div>
          <div
            className={`font-semibold text-base xs:text-lg sm:text-2xl mb-2`}
          >
            <LoadingSkeleton
              data={checkDataAvailability(data?.name)}
              height={30}
              loading={seasonLoading}
              width={100}
            />
          </div>
          <div className="text-xs xs:text-sm sm:text-base mb-2 font-semibold flex items-center">
            <div>
              <LoadingSkeleton
                data={checkDataAvailability(data?.name)}
                height={30}
                loading={seasonLoading}
                width={150}
              />
            </div>
            <span className="mx-2">|</span>
            <div>
              <LoadingSkeleton
                data={<div>{data?.episodes?.length} Episodes</div>}
                height={30}
                loading={seasonLoading}
                width={150}
              />
            </div>
          </div>
        </div>
        <div className="text-xs xs:text-sm sm:text-base mr-2 max-h-[12rem] sm:max-h-[10rem] overflow-y-auto scrollBar">
          <LoadingSkeleton
            data={checkDataAvailability(data?.overview)}
            height={50}
            loading={seasonLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default SeasonsCard;
