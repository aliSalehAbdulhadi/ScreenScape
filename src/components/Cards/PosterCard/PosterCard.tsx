import React, { useState } from 'react';
import Image from 'next/image';
import { SlPicture } from 'react-icons/sl';
import { imageQualitySmallScreen } from '@/src/global/globalVariables';
import { charactersLengthHandler } from '@/src/helper/charactersLengthHandler';

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

  const imagePlaceholder = '/images/imagePlaceholder.png';

  return (
    <div className="transition-all sm:hover:opacity-90">
      <div>
        {imageUrl?.length > 0 ? (
          <Image
            quality={imageQualitySmallScreen}
            src={
              loading
                ? imagePlaceholder
                : `https://image.tmdb.org/t/p/original/${imageUrl}`
            }
            width={150}
            height={250}
            alt="Title Image"
            className={`h-[250px] w-[195px] object-fit rounded-t ${
              loading === false ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoading(false)}
          />
        ) : (
          <div className="h-[250px] bg-placeholder flex items-center justify-center">
            <SlPicture className="h-[3.5rem] w-[3.5rem] opacity-40" />
          </div>
        )}
      </div>

      <div className="px-2 flex flex-col w-[195px] h-full rounded-b">
        <span className="mt-2 h-[4.8rem] w-fit">
          {charactersLengthHandler(title, 38)}
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
  );
};

export default PosterCard;
