import React from 'react';

const platforms = ['Netflix', 'Hulu', 'Disney+'];

const StreamedOn = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center ml-1">
        {platforms.map((platform) => (
          <span key={platform}>{platform}</span>
        ))}
      </div>
    </div>
  );
};

export default StreamedOn;
