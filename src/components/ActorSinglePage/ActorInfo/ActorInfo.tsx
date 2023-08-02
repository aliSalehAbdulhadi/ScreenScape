import moment from 'moment';
import Image from 'next/image';
import MasonryGridPics from '../../MasonryGridPics/MasonryGridPics';
import { imageQualityLargeScreen } from '@/src/global/globalVariables';
import SocialMedia from '../../SocialMedia/SocialMedia';
import { RxPerson } from 'react-icons/rx';
import { ActorSingleInterface } from '@/src/Interfaces/interfaces';
import LoadingSkeleton from '../../LoadingComponent/LoadingSkeleton/LoadingSkeleton';

const ActorInfo = ({
  data,
  loading,
}: {
  data: ActorSingleInterface;
  loading: boolean;
}) => {
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
        <div className={`xs:w-[28rem] sm:w-[21rem] semiSm:min-w-[21rem]`}>
          <MasonryGridPics mediaType="person" id={data?.id}>
            {data?.profile_path &&
            data?.profile_path?.length > 0 &&
            !loading ? (
              <Image
                quality={imageQualityLargeScreen}
                width={1000}
                height={1000}
                src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
                alt="Actor Photo"
                className={`xs:rounded object-fit h-[28rem] xxxs:h-[35rem] xxs:h-[37rem] sm:h-[30rem] xs:w-[28rem] sm:w-[21rem]`}
                priority={true}
              />
            ) : (
              <div
                className={`flex items-center justify-center h-[30rem] w-full rounded overflow-hidden bg-placeholder ${
                  loading && 'animate-pulse'
                }`}
              >
                <RxPerson
                  className={`h-20 w-20 opacity-40 mr-2 ${loading && 'hidden'}`}
                />
              </div>
            )}
          </MasonryGridPics>
        </div>

        <div className=" sm:pl-5  xs:ml-0  mx-2 xs:mx-5">
          <div className="flex items-center">
            <LoadingSkeleton
              data={
                <span className="text-lg xxxs:text-2xl xs:text-3xl">
                  {data?.name ? data?.name : '-'}
                </span>
              }
              height={30}
              loading={loading}
              width={150}
            />
          </div>
          <div className="  mt-3 w-fit text-sm xx:text-xs xs:text-sm">
            <div className="mt-5">
              <LoadingSkeleton
                data={
                  <div>
                    <span className="font-semibold">Born:</span>{' '}
                    <span className="text-offWhite  text-opacity-80">
                      {data?.birthday ? age : ' -'}
                    </span>
                  </div>
                }
                height={20}
                loading={loading}
                width={100}
              />
            </div>

            {data?.deathday ? (
              <div className="mt-2">
                <LoadingSkeleton
                  data={
                    <div>
                      <span className=" font-semibold"> Died:</span>
                      <span className="text-offWhite  text-opacity-80">
                        {data?.deathday ? deathDay : ' -'}
                      </span>
                    </div>
                  }
                  height={30}
                  loading={loading}
                />
              </div>
            ) : (
              ''
            )}

            <div className="mt-2">
              <LoadingSkeleton
                data={
                  <div>
                    <span className=" font-semibold">Place of Birth: </span>
                    <span className="text-offWhite  text-opacity-80">
                      {data?.place_of_birth ? data?.place_of_birth : '-'}
                    </span>
                  </div>
                }
                height={20}
                loading={loading}
                width={100}
              />
            </div>

            <div className="mt-2">
              <LoadingSkeleton
                data={
                  <div>
                    <span className=" font-semibold">Known for: </span>
                    <span className="text-offWhite  text-opacity-80">
                      {data?.known_for_department
                        ? data?.known_for_department
                        : '-'}
                    </span>
                  </div>
                }
                height={20}
                loading={loading}
                width={100}
              />
            </div>

            <div className="mt-2">
              <LoadingSkeleton
                data={
                  <div>
                    <span className=" font-semibold">Gender: </span>
                    <span className="text-offWhite  text-opacity-80">
                      {!data?.gender
                        ? data?.gender === 1
                          ? 'Female'
                          : 'Male'
                        : '-'}
                    </span>
                  </div>
                }
                height={20}
                loading={loading}
                width={100}
              />
            </div>
          </div>
          <div className="mt-5 min-h-10 ">
            <LoadingSkeleton
              data={<SocialMedia mediaType="person" id={data?.id} />}
              height={20}
              loading={loading}
              width={40}
            />
          </div>
          <div className=" mt-6  max-h-[15rem]  text-[17px] scrollBar  overflow-auto hidden semiSm:block">
            <LoadingSkeleton
              data={
                <span className=" leading-7 text-offWhite text-opacity-80">
                  {data?.biography
                    ? data?.biography
                    : `${data?.name}'s biography is not available`}
                </span>
              }
              height={200}
              loading={loading}
              width={450}
            />
          </div>
        </div>
      </div>

      <div className=" mt-12 semiSm:mx-0 text-sm xxs:text-[17px] semiSm:hidden mx-2 xs:mx-10 flex flex-col">
        <span className=" text-secondary   text-sm xxxs:text-base sm:text-lg mb-2">
          Biography
        </span>

        <LoadingSkeleton
          data={
            <span className=" leading-7">
              {data?.biography
                ? data?.biography
                : `${data?.name}'s biography is not available`}
            </span>
          }
          height={100}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ActorInfo;
