import React, { ReactNode } from 'react';
import { RxPerson } from 'react-icons/rx';
import { SlPicture } from 'react-icons/sl';

const SinglePlaceholder = ({
  children,
  condition,
  isTitle,
}: {
  condition: boolean | unknown;
  children: ReactNode;
  isTitle: boolean;
}) => {
  return (
    <div className={`${condition || 'w-full xs:w-fit'} `}>
      {condition ? (
        children
      ) : (
        <div className=" bg-white bg-opacity-20 flex items-center justify-center h-[30rem] w-full xs:w-[28rem]  sm:w-[20rem] rounded overflow-hidden">
          {isTitle ? (
            <SlPicture className="h-[3.5rem] w-[3.5rem]" />
          ) : (
            <RxPerson className="h-20 w-20 opacity-40 mr-2" />
          )}
        </div>
      )}
    </div>
  );
};

export default SinglePlaceholder;
