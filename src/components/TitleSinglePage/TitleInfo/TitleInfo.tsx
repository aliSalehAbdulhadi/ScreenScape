import Image from 'next/image';
import { useState } from 'react';
import SingleGenres from './SingleGenres/SingleGenres';
import Rating from './Rating/Rating';
import StreamedOn from './StreamedOn/StreamedOn';
import TrailerButton from './TrailerButton/TrailerButton';
import SinglePlaceholder from '../../Placeholders/SinglePlaceholder/SinglePlaceholder';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';

const TitleInfo = ({ data, trailerUrl }: { data: any; trailerUrl: any }) => {
  const minutes = data.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col  items-start w-[100%]  sm:pr-5 ">
      <div className="w-[95%] sm:w-[90%] semiSm:w-[80%] lg:w-[70%]"></div>
      <div className="flex justify-center flex-col sm:justify-start  sm:flex-row w-full">
        <div className=" rounded self-center sm:self-start mb-5 sm:mb-0 h-full  w-full xs:w-[28rem]  sm:w-[20rem]">
          <SinglePlaceholder condition={data?.poster_path} isTitle={true}>
            {loading && (
              <div className="h-[30rem]">
                <LoadingPicture />
              </div>
            )}
            <Image
              width={1000}
              height={1000}
              src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
              alt="Poster Photo"
              className={`rounded  object-fit w-full h-full ${
                loading === false ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoading(false)}
            />
          </SinglePlaceholder>
        </div>

        <div className=" mx-2 xxxs:ml-5 sm:mx-0 sm:pl-3 xxs:flex sm:block justify-between relative text-sm xx:text-xs xs:text-sm mt-5 xs:mt-14 sm:mt-0 text-white">
          <div className=" w-full xxs:w-fit relative  ">
            <span className="text-lg xxxs:text-xl  semiSm:text-3xl  flex items-center w-full xxxs:w-[50%] xxs:w-[100%] semiSm:w-full">
              {data?.title}
            </span>
            <div className=" text-opacity-75 w-fit mb-5 mt-2">
              <SingleGenres />
            </div>

            <div className="  top-0 absolute hidden xxs:hidden xxxs:block right-0">
              <TrailerButton trailerUrl={trailerUrl[0]?.key} />
            </div>
          </div>
          <div className=" w-fit opacity-75 mt-1 semiSm:mt-0 mr-2 ">
            <div className="flex items-center mb-5 ">
              <span className="border-[1px] p-[2px] border-white border-opacity-75 mr-3">
                +18
              </span>
              <span>{data?.release_date?.split('-')[0]}</span>
            </div>

            <div className="mb-5 whitespace-nowrap ">
              <span> {hours + 'h ' + remainingMinutes + 'm'}</span>
            </div>

            <div className="flex flex-col semiSm:flex-row  w-fit  mt-1 xxxs:mb-0 semiSm:mt-0">
              <div className="mb-5 semiSm:mr-5 opacity-75">
                <Rating />
                <div className="opacity-75 semiSm:hidden mt-4">
                  <StreamedOn />
                </div>
              </div>
            </div>
          </div>

          <div className="text-[17px] h-[10rem] semiSm:w-[22rem] md:w-[33rem] lg:w-[43rem] xl:w-[28.5rem] xxl:w-[35rem] xxxl:w-[40rem] scrollBar overflow-auto hidden  semiSm:block text-offWhite">
            <span className="leading-7">{data?.overview}</span>
          </div>

          <div className="bottom-0  flex sm:left-3  xxxs:hidden xxs:block xxxs:absolute w-full">
            <div className="flex items-center ">
              <TrailerButton trailerUrl={trailerUrl[0]?.key} />
              <div className="hidden semiSm:block w-[13rem] ml-5">
                <StreamedOn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm xxs:text-[17px] scrollBar mx-2 xxxs:mx-5 sm:mx-0  mt-5 self-center  semiSm:hidden">
        <span className="leading-7">{data?.overview}</span>
      </div>
    </div>
  );
};

export default TitleInfo;
