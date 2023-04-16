import Image from 'next/image';
import { useEffect, useState } from 'react';
import Genres from '../TitleSinglePage/TitleInfo/Genres/Genres';
import PlusButton from '../Buttons/PlusButton/PlusButton';
import useClickOutside from '@/src/hooks/useClickOutside';

const HoverExpand = ({
  index,
  hoveredIndex,
  title,
}: {
  index: number;
  hoveredIndex: number;
  title: { url: string };
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [expandAnimation, setExpandAnimation] = useState<boolean>(false);

  const hoverRef = useClickOutside(() => {
    setExpand(false);
    setExpandAnimation(false);
  });

  const expandEnterHandler = () => {
    const expandTimer = setTimeout(() => {
      if (!expand && !expandAnimation) {
        setExpand(true);
      }
    }, 800);

    const animationTimer = setTimeout(() => {
      if (!expand && !expandAnimation) {
        setExpandAnimation(true);
      }
    }, 750);

    if (!expand) {
      return [
        () => clearTimeout(animationTimer),
        () => clearTimeout(expandTimer),
      ];
    }
  };

  const expandExitHandler = () => {
    const expandTimer = setTimeout(() => {
      setExpand(false);
    }, 55);

    const animationTimer = setTimeout(() => {
      setExpandAnimation(false);
    }, 100);

    return [
      () => clearTimeout(animationTimer),
      () => clearTimeout(expandTimer),
    ];
  };

  useEffect(() => {
    hoveredIndex !== index && expandExitHandler();
  }, [hoveredIndex]);

  return (
    <div
      onMouseOver={() => expandEnterHandler()}
      onMouseLeave={() => expandExitHandler()}
      className="flex flex-col items-center justify-center my-10  cursor-pointer  rounded bg-primary hover:scale-125  hover:shadow-2xl opacity-0 hover:opacity-100 cardHover relative"
    >
      <div>
        <Image
          width={300}
          height={300}
          src={title.url}
          className={`object-contain w-[290px]  m-0 cursor-pointer "
            alt="poster ${expand ? 'md:rounded-t ' : 'rounded'}`}
          alt="aaa"
        />
      </div>

      <div
        className={`p-3 rounded-b bg-black bg-opacity-50 w-full absolute -bottom-28`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl">Midway</span>
          <PlusButton size={25} />
        </div>

        <div className="flex text-sm my-3">
          <span className="mr-5 mt-1">1h26m</span>
          <div className="flex items-center ">
            <span className="border-[1px] p-1  border-white border-opacity-75 mr-3 text-xs">
              +18
            </span>
            <span>2019</span>
          </div>
        </div>
        <div className="">
          <Genres className="flex items-center justify-between text-xs" />
        </div>
      </div>
    </div>
  );
};

export default HoverExpand;
