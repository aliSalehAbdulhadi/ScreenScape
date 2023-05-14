import { ReactNode } from 'react';
import { RxPerson } from 'react-icons/rx';
import { v4 as uuidv4 } from 'uuid';
import { charactersLengthHandler } from '@/src/helper/charactersLengthHandler';

const CreditsCardPlaceholder = ({
  children,
  condition,
  data,
  mediaType,
}: {
  condition: boolean | unknown;
  children: ReactNode;
  data: any;
  mediaType: string;
}) => {
  return (
    <div className="transition-all sm:hover:opacity-90">
      {condition ? (
        children
      ) : (
        <div className="h-[362px] w-[195px] rounded overflow-hidden">
          <div className="h-[69%] bg-white bg-opacity-10 flex items-center justify-center">
            <RxPerson className="h-20 w-20 opacity-40 mr-2" />
          </div>

          {data?.jobs || data?.job ? (
            <div className="flex flex-col  h-full px-2 mt-2">
              <span>{charactersLengthHandler(data?.name, 38)}</span>
              <span className=" text-sm text-white opacity-60  w-full">
                {mediaType === 'movie'
                  ? data?.job
                  : data?.jobs?.map((job: any) => (
                      <span key={uuidv4()} className="w-full">
                        {job?.job}
                      </span>
                    ))}
              </span>

              {mediaType === 'tv' && (
                <span className="mt-10 text-xs text-white text-opacity-75">
                  {data?.total_episode_count} Episodes
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-col  h-full px-2 mt-2">
              <div className="h-[7rem] overflow-auto scrollBar">

                {mediaType === 'movie'
                  ? data?.character
                  : data?.roles?.map((role: any) => (
                      <span key={uuidv4()} className="w-full">
                        {charactersLengthHandler(role?.character, 38)}
                      </span>
                    ))}
              </div>
              <span className=" text-sm text-white opacity-60  w-full">
                {charactersLengthHandler(data?.name, 38)}
              </span>
              {mediaType === 'tv' && (
                <span className="mt-10 mb-3 text-xs text-white text-opacity-75">

                  {data?.total_episode_count} Episodes
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CreditsCardPlaceholder;
