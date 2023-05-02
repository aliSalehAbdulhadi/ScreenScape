import Image from 'next/image';

const SinglePicture = ({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="m-2 fade-in relative">
      <Image
        onClick={() =>
          window?.open(
            `https://image.tmdb.org/t/p/original/${imageUrl}`,
            '_blank'
          )
        }
        width={width}
        height={height}
        src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
        alt="Poster Photo"
        loading="lazy"
        blurDataURL="/images/imagePlaceholder.png"
        placeholder="blur"
        className={`rounded-lg  object-fit w-full h-full masonry-grid_item cursor-pointer hover:opacity-`}
      />
    </div>
  );
};

export default SinglePicture;
