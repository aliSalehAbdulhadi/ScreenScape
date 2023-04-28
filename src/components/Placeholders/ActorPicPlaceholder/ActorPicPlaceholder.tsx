import React, { ReactNode } from 'react';
import { RxPerson } from 'react-icons/rx';

const ActorPicPlaceholder = ({
  children,
  condition,
}: {
  condition: boolean | unknown;
  children: ReactNode;
}) => {
  return (
    <div>
      {condition ? (
        children
      ) : (
        <div className="h-[250px] w-[200px] bg-white bg-opacity-10 flex items-center justify-center">
          <RxPerson className="h-20 w-20 opacity-40 mr-2" />
        </div>
      )}
    </div>
  );
};

export default ActorPicPlaceholder;
