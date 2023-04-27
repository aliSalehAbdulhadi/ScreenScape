import { Suspense, lazy, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@/src/hooks/useWindowsSize';

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
            width={300}
            height={190}
            src={process.env.NEXT_PUBLIC_IMAGE_LINK + title?.backdrop_path}
            className=" object-contain md:rounded m-0 cursor-pointer "
            alt="poster"
            loading="lazy"
          />
          <Suspense>
            <div
              className={`absolute  top-[-40px] hover:top-[-90px]  h-[10rem] transition-all duration-300 ${
                sliderElementIndex(0).includes(index) && 'hover:left-14'
              } ${sliderElementIndex(5).includes(index) && 'hover:right-14'}`}
            >
              <HoverExpand
                index={index}
                hoveredIndex={hoveredIndex}
                titleId={title.id}
              />
            </div>
          </Suspense>
        </div>
      ) : (
        <Link href="/browse/sss">
          <div>
            <Image
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
              src={process.env.NEXT_PUBLIC_IMAGE_LINK + title?.backdrop_path}
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
