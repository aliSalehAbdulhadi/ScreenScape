import React, { useState } from 'react';
import Image from 'next/image';
import PosterCardPlaceholder from '../../Placeholders/PosterCardPlaceholder/PosterCardPlaceholder';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';

const PosterCard = ({
  imageUrl,
  title = '',
  isAdult = false,
  releaseDate = '',
  rating = 0,
  index,
}: {
  imageUrl: string;
  title?: string;
  isAdult?: boolean;
  releaseDate?: string;
  rating?: any;
  index: number;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <PosterCardPlaceholder
      condition={imageUrl}
      title={title}
      isAdult={isAdult}
      rating={rating}
      releaseDate={releaseDate}
    >
      <div className="transition-all sm:hover:opacity-90">
        {loading && (
          <div className="h-[367px]  w-[195px] ">
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

        <div className="px-2 flex flex-col w-[195px] h-full rounded-b">
          <span className="mt-2 h-[4.8rem] w-fit">
            {title?.length <= 38 ? title : title?.slice(0, 38) + '...'}
          </span>
          <div className="flex  items-center justify-between opacity-75 w-full text-xs">
            <div className="flex items-center ">
              {isAdult ? (
                <span className="border-[1px] rounded p-[2px] bg-white bg-opacity-20  border-white border-opacity-75 mr-3 font-averia">
                  +18
                </span>
              ) : (
                <span className="border-[1px] rounded py-[2px] bg-white bg-opacity-20 px-2 border-white border-opacity-75 mr-3 font-averia">
                  G
                </span>
              )}

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
