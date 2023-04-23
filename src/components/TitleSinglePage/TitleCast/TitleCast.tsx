'use client';

import Image from 'next/image';
import Link from 'next/link';
import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';

const castImages = [
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
  { url: '/images/licensed-image.jpeg', name: 'Keanu Revees' },
];

export const TitleCast = () => {
  return (
    <GridComp title="Cast">
      {castImages.map((cast, i) => (
        <DelayDisplay key={cast.url + i} delay={i * 50}>
          <Link
            href="/actor/sss"
            className="flex flex-col  mb-3 cursor-pointer w-fit bg-white bg-opacity-10 h-[15rem] rounded overflow-hidden"
          >
            <Image
              src={cast.url}
              width={150}
              height={150}
              alt="Actor Image"
              className="h-[150px] w-[150px] object-fit"
            />
            <div className="ml-2 mt-2 flex flex-col">
              <span className="mt-2">{cast.name}</span>
              <span className=" text-sm opacity-75">{cast.name}</span>
            </div>
          </Link>
        </DelayDisplay>
      ))}
    </GridComp>
  );
};
