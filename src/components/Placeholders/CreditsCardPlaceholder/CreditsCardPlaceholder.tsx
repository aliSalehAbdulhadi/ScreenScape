import { ReactNode } from 'react';
import { RxPerson } from 'react-icons/rx';

const CreditsCardPlaceholder = ({
  children,
  condition,
  personName = '',
  characterName = '',
  job,
}: {
  condition: boolean | unknown;
  children: ReactNode;
  personName: string;
  characterName: string;
  job: string;
}) => {
  return (
    <div className="transition-all sm:hover:opacity-90">
      {condition ? (
        children
      ) : (
        <div className="h-[362px] w-[195px] rounded overflow-hidden">
          <div className="h-[69%] bg-white bg-opacity-20 flex items-center justify-center">
            <RxPerson className="h-20 w-20 opacity-40 mr-2" />
          </div>

          {job ? (
            <div className="flex flex-col  h-full px-2 mt-2">
              <span className="mt-2">
                {personName.length <= 45
                  ? personName
                  : personName.slice(0, 45) + '...'}
              </span>
              <span className=" text-sm text-white opacity-60  w-full">
                {job}
              </span>
            </div>
          ) : (
            <div className="flex flex-col  h-full px-2 mt-2">
              <span className="mt-2">
                {characterName.length <= 45
                  ? characterName
                  : characterName.slice(0, 45) + '...'}
              </span>
              <span className=" text-sm text-white opacity-60  w-full">
                {personName.length <= 45
                  ? personName
                  : personName.slice(0, 45) + '...'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CreditsCardPlaceholder;
