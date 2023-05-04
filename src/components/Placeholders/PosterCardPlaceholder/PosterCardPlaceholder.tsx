import { ReactNode } from 'react';
import { SlPicture } from 'react-icons/sl';

const PosterCardPlaceholder = ({
  children,
  condition,
  title = '',
  rating = 0,
  isAdult,
  releaseDate,
}: {
  condition: boolean | unknown;
  children: ReactNode;
  title: string;
  isAdult: boolean;
  releaseDate: string;
  rating: any;
}) => {
  return (
    <div className="transition-all hover:opacity-90">
      {condition ? (
        children
      ) : (
        <div className="h-[367px] w-[195px] rounded overflow-hidden">
          <div className="h-[69%] bg-white bg-opacity-20 flex items-center justify-center">
            <SlPicture className="h-[3.5rem] w-[3.5rem] opacity-40" />
          </div>

          <div className=" bg-white bg-opacity-10 h-full pt-1 px-2">
            <div className="text-sm h-[4.8rem]">
              {title?.length <= 45 ? title : title?.slice(0, 45) + '...'}
            </div>
            <div className="flex items-center justify-between text-xs opacity-75 w-full">
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

              <span className=" text-[.8rem]">{parseInt(rating)}% Liked</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PosterCardPlaceholder;
