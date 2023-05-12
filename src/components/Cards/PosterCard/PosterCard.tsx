import React, { useState } from 'react';
import Image from 'next/image';
import PosterCardPlaceholder from '../../Placeholders/PosterCardPlaceholder/PosterCardPlaceholder';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';
import { imageQualitySmallScreen } from '@/src/global/globalVariables';

const PosterCard = ({
  imageUrl,
  title = '',
  releaseDate = '',
  rating = 0,
  index,
  mediaType,
}: {
  imageUrl: string;
  title?: string;
  releaseDate?: string;
  rating?: any;
  index: number;
  mediaType: string;
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <PosterCardPlaceholder
      condition={imageUrl}
      title={title}
      rating={rating}
      releaseDate={releaseDate}
      mediaType={mediaType}
    >
      <div className="transition-all sm:hover:opacity-90">
        {loading && (
          <div className="h-[367px]  w-[195px] ">
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

        <div className="px-2 flex flex-col w-[195px] h-full rounded-b">
          <span className="mt-2 h-[4.8rem] w-fit">
            {title?.length <= 38 ? title : title?.slice(0, 38) + '...'}
          </span>
          <div className="flex  items-center justify-between opacity-75 w-full text-xs">
            <div className="flex items-center ">
              <span className="border-[1px] rounded min-w-[1.5rem] min-h-[1rem] p-1 flex justify-center items-center bg-black bg-opacity-20  border-white border-opacity-75 mr-3 font-averia">
                {mediaType === 'tv' ? 'TV' : 'Movie'}
              </span>

              <span>{releaseDate?.split('-')[0]}</span>
            </div>

            <span className=" text-[.8rem]">
              {rating === 0 ? 'Not Rated' : `${parseInt(rating)}% Liked`}
            </span>
          </div>
        </div>
      </div>
    </PosterCardPlaceholder>
  );
};

export default PosterCard;
