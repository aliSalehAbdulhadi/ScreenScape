import { charactersLengthHandler } from '@/src/helper/charactersLengthHandler';
import { ReactNode } from 'react';
import { SlPicture } from 'react-icons/sl';

const PosterCardPlaceholder = ({
  children,
  condition,
  title = '',
  rating = 0,
  releaseDate,
  mediaType,
}: {
  condition: boolean | unknown;
  children: ReactNode;
  title: string;
  releaseDate: string;
  rating: any;
  mediaType: string;
}) => {
  return (
    <div className="transition-all sm:hover:opacity-90">
      {condition ? (
        children
      ) : (
        <div className="h-[363px] w-[195px] rounded overflow-hidden">
          <div className="h-[69%] bg-white bg-opacity-10 flex items-center justify-center">
            <SlPicture className="h-[3.5rem] w-[3.5rem] opacity-40" />
          </div>

          <div className="  h-full pt-2 px-2">
            <div className="text-sm h-[4.8rem]">
              {charactersLengthHandler(title, 38)}
            </div>
            <div className="flex items-center justify-between text-xs opacity-75 w-full">
              <div className="flex items-center ">
                <span className="border-[1px] rounded min-w-[1.5rem] min-h-[1rem] p-1 flex justify-center items-center bg-black bg-opacity-20  border-white border-opacity-75 mr-3 font-averia">
                  {mediaType === 'tv' ? 'TV' : 'Movie'}
                </span>

                <span>{releaseDate?.split('-')[0]}</span>
              </div>

              <span className=" text-[.8rem]">{parseInt(rating)}% Liked</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PosterCardPlaceholder;
