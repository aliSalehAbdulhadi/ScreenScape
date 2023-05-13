import { charactersLengthHandler } from '@/src/helper/charactersLengthHandler';
import { ReactNode } from 'react';
import { RxPerson } from 'react-icons/rx';

const CastCardPlaceholder = ({
  children,
  condition,
  actorName = '',
  characterName = '',
}: {
  condition: boolean | unknown;
  children: ReactNode;
  actorName: string;
  characterName: string;
}) => {
  return (
    <div className="transition-all hover:opacity-90">
      {condition ? (
        children
      ) : (
        <div className="h-[362px] w-[195px] rounded overflow-hidden">
          <div className="h-[69%] bg-white bg-opacity-20 flex items-center justify-center">
            <RxPerson className="h-20 w-20 opacity-40 mr-2" />
          </div>

          <div className="flex flex-col  h-full px-2">
            <span className="mt-2">
              {charactersLengthHandler(characterName, 38)}
            </span>
            <span className=" text-sm text-white opacity-60  w-full">
              {charactersLengthHandler(actorName, 38)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default CastCardPlaceholder;
