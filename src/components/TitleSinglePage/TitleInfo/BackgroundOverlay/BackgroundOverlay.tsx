'use client';

import { ReactNode, useState, useEffect } from 'react';
import { extractColors } from 'extract-colors';
import useWindowSize from '@/src/hooks/useWindowsSize';

const BackgroundOverlay = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<{ hex: string }[]>([]);

  const width = useWindowSize();

  const images = [
    { url: '/images/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg' },
    {
      url: '/images/716rIayrVWL._AC_SL1500_.jpg',
    },
    { url: '/images/d05a3f087fa57f6d41b865d53a42a5f5.jpeg' },
  ];
  const imageUrl: string = images[1]?.url;

  useEffect(() => {
    const options = {
      limit: 1,
      pixels: 64000,
      distance: 0.22,
      colorValidator: (red: any, green: any, blue: any, alpha = 255) =>
        alpha > 250,
      saturationDistance: 0.2,
      lightnessDistance: 0.2,
      hueDistance: 0.083333333,
    };
    extractColors(imageUrl, options).then((colors) => {
      setColors(colors);
      // do something with the colors
    });
  }, [imageUrl]);

  return (
    <div className="w-full">
      {width > 864 ? (
        <div
          style={{
            backgroundImage: `url(${images[1]?.url})`,
          }}
          className="flex background-image justify-between w-full relative  bg-no-repeat bg-cover  py-5"
        >
          <div className=" select-text text-white ">{colors[8]?.hex}</div>
          {children}
          <div
            style={{
              backgroundColor: colors.length ? colors[1].hex : 'black',
              opacity: 0.5,
            }}
            className={`w-full bg-opacity-50 absolute top-0 h-[32.5rem] pointer-events-none `}
          ></div>
          <div className="w-full overlay  absolute top-0 h-[32.5rem] pointer-events-none "></div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default BackgroundOverlay;
