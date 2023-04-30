// const genres = ['Action', 'Thriller', 'Crime Film', 'Adventure'];

import Link from 'next/link';

const SingleGenres = ({
  className = '',
  underLine = true,
  genres,
  isMovies,
}: {
  className?: string;
  underLine?: boolean;
  genres?: [];
  isMovies?: boolean;
}) => {
  return (
    <div
      className={`${
        className.length > 0
          ? className
          : 'grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-1 w-fit text-sm '
      }`}
    >
      {genres?.map(
        (genre: { name: string; id: number }, i) =>
          i <= 3 && (
            <Link
              href={`search/genre/${isMovies ? 'movie' : 'tv'}/${genre?.id}`}
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
