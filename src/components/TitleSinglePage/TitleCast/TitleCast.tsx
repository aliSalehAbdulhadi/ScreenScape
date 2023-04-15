import Image from 'next/image';
import Link from 'next/link';

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
    <div className="flex flex-col">
      <span className="text-2xl text-secondary self-center xxxs:self-start">
        Cast
      </span>
      <div className="mt-5 grid grid-cols-fluid place-items-center semiSm:place-items-start ">
        {castImages.map((cast, i) => (
          <Link
            href="/actor/sss"
            key={cast.url + i}
            className="flex flex-col  mb-3 cursor-pointer w-fit bg-white bg-opacity-10 h-[15rem] rounded-lg overflow-hidden"
          >
            <Image
              src={cast.url}
              width={150}
              height={150}
              alt="Actor Image"
              className="h-[150px] w-[150px] object-fill"
            />
            <div className="ml-2 mt-2 flex flex-col">
              <span className="mt-2">{cast.name}</span>
              <span className=" text-sm opacity-75">{cast.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
