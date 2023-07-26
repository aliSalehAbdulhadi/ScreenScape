import React, { useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';
import { imageQualitySmallScreen } from '@/src/global/globalVariables';
import { charactersLengthHandler } from '@/src/helper/charactersLengthHandler';
import { RxPerson } from 'react-icons/rx';

const CreditsCard = ({
  data,
  index,
  mediaType,
}: {
  data: any;
  index: number;
  mediaType: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {data.profile_path?.length > 0 ? (
        <div className="transition-all sm:hover:opacity-90">
          {loading && (
            <div className="h-[365px]  w-[195px] ">
              <LoadingPicture />
            </div>
          )}
          <Image
            quality={imageQualitySmallScreen}
            src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
            width={150}
            height={250}
            alt="Title Image"
            className={`h-[250px] w-[195px] object-fit rounded-t ${
              loading === false ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoading(false)}
          />
        </div>
      ) : (
        <div className="h-[250px] bg-placeholder flex items-center justify-center">
          <RxPerson className="h-20 w-20 opacity-40 mr-2" />
        </div>
      )}

      {data?.jobs || data?.job ? (
        <div className="px-2 mt-2 flex flex-col w-[100%] h-[7rem]">
          <span>{charactersLengthHandler(data?.name, 38)}</span>
          <span className=" text-sm text-white opacity-60  w-full">
            {mediaType === 'movie'
              ? data?.job
              : data?.jobs?.map((job: any) => (
                  <span key={uuidv4()} className="w-full">
                    {job?.job}
                  </span>
                ))}
          </span>

          {mediaType === 'tv' && (
            <span className="mt-10 text-xs text-white text-opacity-75">
              {data?.total_episode_count} Episodes
            </span>
          )}
        </div>
      ) : (
        <div className="px-2 mt-2 flex flex-col w-[100%] h-[7rem] overflow-auto scrollBar">
          {mediaType === 'movie'
            ? data?.character
            : data?.roles?.map((role: any) => (
                <span key={uuidv4()} className="w-full">
                  {charactersLengthHandler(role?.character, 38)}
                </span>
              ))}
          <span className=" text-sm opacity-75 w-full">
            {charactersLengthHandler(data?.name, 38)}
          </span>
          {mediaType === 'tv' && (
            <span className="mt-10 mb-3 text-xs text-white text-opacity-75">
              {data?.total_episode_count} Episodes
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CreditsCard;
