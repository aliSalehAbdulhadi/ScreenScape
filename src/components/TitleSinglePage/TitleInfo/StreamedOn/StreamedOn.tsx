import React from 'react';

const platforms = ['Netflix', 'Hulu', 'Disney+'];

const StreamedOn = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col semiSm:flex-row semiSm:justify-around justify-center ">
        {platforms.map((platform) => (
          <span
            className="mb-1 semiSm:mb-0 cursor-pointer hover:opacity-90 transition-all"
            key={platform}
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StreamedOn;
