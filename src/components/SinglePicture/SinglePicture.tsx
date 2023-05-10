import { imageQualitySmallScreen } from '@/src/global/globalVariables';
import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

const SinglePicture = ({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div className="m-2 fade-in relative">
      <Image
        quality={imageQualitySmallScreen}
        width={width}
        height={height}
        src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
        alt="Poster Photo"
        loading="lazy"
        blurDataURL="/images/imagePlaceholder.png"
        placeholder="blur"
        className={`rounded-lg  object-fit w-full h-full masonry-grid_item cursor-pointer transition-all hover:opacity-90`}
        onLoad={() => setLoaded(true)}
      />

      <HiOutlineExternalLink
        onClick={() =>
          window?.open(`https://image.tmdb.org/t/p/original/${imageUrl}`)
        }
        className={`h-6 w-6 absolute bottom-2 right-2 cursor-pointer ${
          !loaded ? 'hidden' : ''
        }`}
      />
    </div>
  );
};

export default SinglePicture;
