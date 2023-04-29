import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';
import SinglePlaceholder from '../../Placeholders/SinglePlaceholder/SinglePlaceholder';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';

const ActorInfo = ({ data }: { data: any }) => {
  const [loading, setLoading] = useState(true);

  const age = ` ${moment(data?.birthday).format(
    'MMMM Do YYYY'
  )} (${moment().diff(data?.birthday, 'years')} years)`;

  return (
    <div className="flex flex-col semiSm:flex-row">
      <div className="flex flex-col sm:flex-row">
        <div className=" rounded flex  justify-center sm:justify-start mb-5 sm:mb-0 w-full">
          <SinglePlaceholder condition={data?.profile_path} isTitle={false}>
            {loading && (
              <div className="h-[30rem]">
                <LoadingPicture />
              </div>
            )}
            <Image
              width={1000}
              height={1000}
              src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
              alt="Actor Photo"
              className={`rounded h-full object-fit w-full xs:w-[28rem] sm:w-[21rem] ${
                loading === false ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() =>
                setTimeout(() => {
                  setLoading(false);
                }, 100)
              }
            />
          </SinglePlaceholder>
        </div>

        <div className="mx-5 w-fit">
          <div className="flex items-center">
            <span className="text-lg xxxs:text-2xl xs:text-3xl">
              {data?.name ? data?.name : 'Not Available'}
            </span>
          </div>
          <div className="text-offWhite text-opacity-75  mt-3 w-fit text-sm xx:text-xs xs:text-sm">
            <div className="mt-5">
              <span>
                Born:
                {data?.birthday ? age : ' Not Available'}
              </span>
            </div>

            <div className="mt-2">
              <span>
                Place of Birth:{' '}
                {data?.place_of_birth ? data?.place_of_birth : 'Not Available'}
              </span>
            </div>

            <div className="mt-2">
              <span>
                Known for:{' '}
                {data?.known_for_department
                  ? data?.known_for_department
                  : 'Not Available'}
              </span>
            </div>

            <div className="mt-2">
              <span>
                Gender:{' '}
                {data?.gender
                  ? data?.gender === 1
                    ? 'Female'
                    : 'Male'
                  : 'Not Available'}
              </span>
            </div>
          </div>

          <div className=" mt-12 semiSm:w-[20.5rem] md:w-[29rem] lg:w-[38.5rem] xl:w-[24rem] xxl:w-[30rem] xxxl:w-[38rem] h-[16rem]  text-[17px] scrollBar  overflow-auto hidden semiSm:block">
            <span className=" leading-7">
              {data?.biography
                ? data?.biography
                : `${data?.name}'s biography is not available`}
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-12 mx-5 sm:mx-0 text-sm xxs:text-[17px] scrollBar h-[15rem] overflow-auto  semiSm:hidden">
        <span className=" leading-7">
          {data?.biography
            ? data?.biography
            : `${data?.name}'s biography is not available`}
        </span>
      </div>
    </div>
  );
};

export default ActorInfo;
