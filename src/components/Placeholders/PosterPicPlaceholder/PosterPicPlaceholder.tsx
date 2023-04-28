import { ReactNode } from 'react';
import { SlPicture } from 'react-icons/sl';

const PosterPicPlaceholder = ({
  children,
  condition,
  title,
}: {
  condition: boolean | unknown;
  children: ReactNode;
  title: string;
}) => {
  return (
    <div>
      {condition ? (
        children
      ) : (
        <div className="h-[240px] w-[180px] rounded overflow-hidden">
          <div className="h-[70%] bg-white bg-opacity-20 flex items-center justify-center">
            <SlPicture className="h-[3.5rem] w-[3.5rem] opacity-40" />
          </div>
          <div className=" bg-white bg-opacity-10 h-[30%] pt-1 px-2">
            <span className="text-sm ">{title}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default PosterPicPlaceholder;
