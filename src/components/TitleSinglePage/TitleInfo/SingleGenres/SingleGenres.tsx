const genres = ['Action', 'Thriller', 'Crime Film', 'Adventure'];

const SingleGenres = ({
  className = '',
  underLine = true,
}: {
  className?: string;
  underLine?: boolean;
}) => {
  return (
    <div
      className={`${
        className.length > 0
          ? className
          : 'grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-1 w-fit text-sm'
      }`}
    >
      {genres.map((genre) => (
        <span
          key={genre}
          className={`${underLine ? 'underline' : ''} cursor-pointer`}
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default SingleGenres;
