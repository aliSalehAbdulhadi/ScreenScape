import React, { useState } from 'react';
import Image from 'next/image';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';
import CreditsCardPlaceholder from '../../Placeholders/CreditsCardPlaceholder/CreditsCardPlaceholder';

const CreditsCard = ({
  imageUrl,
  personName = '',
  characterName = '',
  index,
  job,
}: {
  imageUrl: string;
  personName: string;
  characterName: string;
  index: number;
  job: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <CreditsCardPlaceholder
      condition={imageUrl}
      characterName={characterName}
      personName={personName}
      job={job}
    >
      <div className="transition-all sm:hover:opacity-90">
        {loading && (
          <div className="h-[362px]  w-[195px] ">
            <LoadingPicture />
          </div>
        )}
        <Image
          src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          width={150}
          height={250}
          alt="Title Image"
          className={`h-[250px] w-[195px] object-fit rounded-t ${
            loading === false ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() =>
            setTimeout(() => {
              setLoading(false);
            }, index * 100)
          }
        />

        {job ? (
          <div className="px-2 mt-2 flex flex-col w-[100%] h-[7rem]">
            <span className="mt-2">
              {personName.length <= 38
                ? personName
                : personName.slice(0, 38) + '...'}
            </span>
            <span className=" text-sm opacity-75 w-full">{job}</span>
          </div>
        ) : (
          <div className="px-2 mt-2 flex flex-col w-[100%] h-[7rem]">
            <span className="mt-2">
              {characterName.length <= 38
                ? characterName
                : characterName.slice(0, 38) + '...'}
            </span>
            <span className=" text-sm opacity-75 w-full">
              {personName.length <= 38
                ? personName
                : personName.slice(0, 38) + '...'}
            </span>
          </div>
        )}
      </div>
    </CreditsCardPlaceholder>
  );
};

export default CreditsCard;
