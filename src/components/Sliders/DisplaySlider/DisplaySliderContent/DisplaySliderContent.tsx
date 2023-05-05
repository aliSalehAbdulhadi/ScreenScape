import { Suspense, lazy, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@/src/hooks/useWindowsSize';
import {
  imageQualityLargeScreen,
  imageQualitySmallScreen,
} from '@/src/global/globalVariables';

const HoverExpand = lazy(() => import('../../../HoverExpand/HoverExpand'));

const DisplaySliderContent = ({
  title,
  index,
  hoveredIndex,
}: {
  title: any;
  index: number;
  hoveredIndex: number;
}) => {
  const [touchedIndex, setTouchedIndex] = useState<number>(0);
  const [touch, setTouch] = useState<boolean>(false);

  const width = useWindowSize();

  const sliderElementIndex = useCallback((e: number) => {
    const startNum = e;
    let numbers = [startNum];

    for (let i = 1; i < 20; i++) {
      numbers.push(numbers[i - 1] + 6);
    }

    return numbers;
  }, []);

  return (
    <div>
      {width > 1150 ? (
        <div className="max-w-[300px] max-h-[190px]">
          <Image
            quality={imageQualityLargeScreen}
            width={300}
            height={190}
            src={`https://image.tmdb.org/t/p/original/${title?.backdrop_path}`}
            className=" object-contain md:rounded m-0 cursor-pointer "
            alt="poster"
            loading="lazy"
          />
          <Suspense>
            <div
              className={`absolute  top-[-40px]   hover:top-[-90px] pointer-events-none  h-[10rem] transition-all duration-300 ${
                sliderElementIndex(0).includes(index) && 'hover:left-14'
              } ${sliderElementIndex(5).includes(index) && 'hover:right-14'}`}
            >
              <div className=" pointer-events-auto">
                <HoverExpand
                  index={index}
                  hoveredIndex={hoveredIndex}
                  titleId={title.id}
                  mediaType={title?.first_air_date ? 'tv' : 'movie'}
                />
              </div>
            </div>
          </Suspense>
        </div>
      ) : (
        <Link
          href={`/browse/${title?.first_air_date ? 'tv' : 'movie'}/${
            title?.id
          }`}
        >
          <div>
            <Image
              quality={imageQualitySmallScreen}
              onTouchStart={() => {
                setTouch(true);
                setTouchedIndex(index);
              }}
              onTouchEnd={() => {
                setTimeout(() => {
                  setTouch(false);
                }, 100);
              }}
              width={300}
              height={190}
              src={`https://image.tmdb.org/t/p/original/${title?.poster_path}`}
              className={`object-contain md:rounded m-0 transition-all  ${
                touch && touchedIndex === index ? 'opacity-60' : ''
              }`}
              alt="poster"
              loading="lazy"
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default DisplaySliderContent;
