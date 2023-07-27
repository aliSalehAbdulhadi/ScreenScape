import moment from 'moment';
import Image from 'next/image';
import MasonryGridPics from '../../MasonryGridPics/MasonryGridPics';
import { imageQualityLargeScreen } from '@/src/global/globalVariables';
import SocialMedia from '../../SocialMedia/SocialMedia';
import { RxPerson } from 'react-icons/rx';
import { ActorSingleInterface } from '@/src/Interfaces/interfaces';

const ActorInfo = ({ data }: { data: ActorSingleInterface }) => {
  const age = `${moment(data?.birthday).format('MMMM Do YYYY')} ${
    data?.deathday ? '' : `(${moment().diff(data?.birthday, 'years')} years)`
  }`;

  const deathDay = ` ${moment(data?.deathday).format('MMMM Do YYYY')} ${
    data?.deathday &&
    `(${moment(data?.deathday).diff(data?.birthday, 'years')} years)`
  }`;
  return (
    <div className="flex flex-col semiSm:flex-row">
      <div className="flex flex-col sm:flex-row xs:self-center">
        <div className={`xs:w-[28rem] sm:w-[21rem]`}>
          <MasonryGridPics mediaType="person" id={data?.id}>
            {data?.profile_path && data?.profile_path?.length > 0 ? (
              <Image
                quality={imageQualityLargeScreen}
                width={1000}
                height={1000}
                src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
                alt="Actor Photo"
                className={`xs:rounded object-fit h-[28rem] xxxs:h-[35rem] xxs:h-[37rem] sm:h-[30rem] xs:w-[28rem] sm:w-[21rem]`}
                blurDataURL="/images/imagePlaceholder.png"
                placeholder="blur"
                priority={true}
              />
            ) : (
              <div className=" flex items-center justify-center h-[30rem] w-full rounded overflow-hidden bg-placeholder">
                <RxPerson className="h-20 w-20 opacity-40 mr-2" />
              </div>
            )}
          </MasonryGridPics>
        </div>

        <div className=" sm:pl-5  xs:ml-0  mx-2 xs:mx-5 semiSm:max-w-[60%] md:max-w-[70%] ">
          <div className="flex items-center">
            <span className="text-lg xxxs:text-2xl xs:text-3xl">
              {data?.name ? data?.name : 'Not Available'}
            </span>
          </div>
          <div className="text-offWhite text-opacity-75  mt-3 w-fit text-sm xx:text-xs xs:text-sm">
            <div className="mt-5">
              <span>Born: {data?.birthday ? age : ' Not Available'}</span>
            </div>

            {data?.deathday ? (
              <div className="mt-2">
                <span>
                  Died:
                  {data?.deathday ? deathDay : ' Not Available'}
                </span>
              </div>
            ) : (
              ''
            )}

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
          <div className="mt-5">
            <SocialMedia mediaType="person" id={data?.id} />
          </div>
          <div className=" mt-6  max-h-[15rem]  text-[17px] scrollBar  overflow-auto hidden semiSm:block">
            <span className=" leading-7">
              {data?.biography
                ? data?.biography
                : `${data?.name}'s biography is not available`}
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-12 semiSm:mx-0 text-sm xxs:text-[17px] semiSm:hidden mx-2 xs:mx-10 flex flex-col">
        <span className=" text-secondary   text-sm xxxs:text-base sm:text-lg mb-2">
          Biography
        </span>
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
