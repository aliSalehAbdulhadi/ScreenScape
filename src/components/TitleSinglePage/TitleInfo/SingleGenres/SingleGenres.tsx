// const genres = ['Action', 'Thriller', 'Crime Film', 'Adventure'];

const SingleGenres = ({
  className = '',
  underLine = true,
  genres,
}: {
  className?: string;
  underLine?: boolean;
  genres: [];
}) => {
  return (
    <div
      className={`${
        className.length > 0
          ? className
          : 'grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-1 w-fit text-sm'
      }`}
    >
      {genres?.map(
        (genre: { name: string; id: number }, i) =>
          i <= 3 && (
            <span
              key={genre.id}
              className={`${
                underLine ? 'underline' : ''
              } cursor-pointer hover:opacity-90 transition-all`}
            >
              {genre.name}
            </span>
          )
      )}
    </div>
  );
};

export default SingleGenres;
