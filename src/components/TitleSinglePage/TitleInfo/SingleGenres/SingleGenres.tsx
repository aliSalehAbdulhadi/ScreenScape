import Link from 'next/link';

const SingleGenres = ({
  className = '',
  underLine = true,
  genres,
  mediaType,
}: {
  className?: string;
  underLine?: boolean;
  genres?: {
    id: number;
    name: string;
  }[];
  mediaType?: string;
}) => {
  return (
    <div
      className={`${
        className.length > 0
          ? className
          : 'grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-1 w-fit text-xs xxxs:text-sm '
      }`}
    >
      {genres?.map(
        (genre: { name: string; id: number }, i) =>
          i <= 3 && (
            <Link
              href={`search/genre/${mediaType}/${genre?.id}-${genre?.name}`}
              key={genre.id}
            >
              <span
                className={`${
                  underLine ? 'underline' : ''
                } cursor-pointer hover:opacity-90 transition-all mr-5`}
              >
                {genre.name}
              </span>
            </Link>
          )
      )}
    </div>
  );
};

export default SingleGenres;
