import React, { useState } from 'react';
import Image from 'next/image';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';
import CastCardPlaceholder from '../../Placeholders/CastCardPlaceholder/CastCardPlaceholder';
import { imageQualitySmallScreen } from '@/src/global/globalVariables';
import { charactersLengthHandler } from '@/src/helper/charactersLengthHandler';

const CastCard = ({
  imageUrl,
  actorName = '',
  characterName = '',
  index,
}: {
  imageUrl: string;
  actorName: string;
  characterName: string;
  index: number;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <CastCardPlaceholder
      condition={imageUrl}
      characterName={characterName}
      actorName={actorName}
    >
      <div className="transition-all hover:opacity-90">
        {loading && (
          <div className="h-[362px]  w-[195px] ">
            <LoadingPicture />
          </div>
        )}
        <Image
          quality={imageQualitySmallScreen}
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

        <div className="px-2 mt-2 flex flex-col w-[100%] h-[7rem]">
          <span className="mt-2">
            {charactersLengthHandler(characterName, 38)}
          </span>
          <span className=" text-sm opacity-75 w-full">
            {charactersLengthHandler(actorName, 38)}
          </span>
        </div>
      </div>
    </CastCardPlaceholder>
  );
};

export default CastCard;
