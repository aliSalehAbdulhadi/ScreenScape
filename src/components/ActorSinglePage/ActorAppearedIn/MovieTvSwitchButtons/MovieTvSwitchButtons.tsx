import React, { Dispatch, SetStateAction } from 'react';

const MovieTvSwitchButtons = ({
  mediaType,
  setMediaType,
}: {
  setMediaType: Dispatch<SetStateAction<string>>;
  mediaType: string;
}) => {
  return (
    <div>
      <span
        onClick={() => setMediaType('movie')}
        className={`mr-3 py-1 px-2  rounded cursor-pointer transition-all border-[1px]  ${
          mediaType === 'movie'
            ? 'text-primary bg-secondary bg-opacity-90 border-secondary'
            : 'border-white border-opacity-80 text-white text-opacity-80'
        }`}
      >
        Movies
      </span>
      <span
        onClick={() => setMediaType('tv')}
        className={`py-1 px-2 transition-all  rounded cursor-pointer border-[1px]   ${
          mediaType === 'tv'
            ? 'text-primary bg-secondary opacity-90 border-secondary'
            : 'border-white border-opacity-80 text-white text-opacity-80'
        }`}
      >
        Shows
      </span>
    </div>
  );
};

export default MovieTvSwitchButtons;
