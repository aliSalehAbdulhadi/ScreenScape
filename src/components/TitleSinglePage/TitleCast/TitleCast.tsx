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
    <div>
      <span className="text-2xl text-secondary">Cast</span>
      <div className="mt-5 grid grid-cols-fluid">
        {castImages.map((cast, i) => (
          <Link
            href="/actor/sss"
            key={cast.url + i}
            className="flex flex-col items-center mb-3 cursor-pointer w-fit"
          >
            <Image
              src={cast.url}
              width={180}
              height={180}
              alt="Actor Image"
              className="rounded-lg h-[140px] w-[130px] object-fill"
            />
            <span className="mt-2">{cast.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
