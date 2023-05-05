import React, { Dispatch, SetStateAction } from 'react';

const CastCrewSwitchButtons = ({
  creditsType,
  setCreditsType,
}: {
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <span
        onClick={() => setCreditsType('cast')}
        className={`mr-3 py-1 px-2  rounded cursor-pointer transition-all border-[1px]  ${
          creditsType === 'cast'
            ? 'text-primary bg-secondary bg-opacity-90 border-secondary'
            : 'border-white border-opacity-80 text-white text-opacity-80'
        }`}
      >
        Cast
      </span>
      <span
        onClick={() => setCreditsType('crew')}
        className={`py-1 px-2 transition-all  rounded cursor-pointer border-[1px]   ${
          creditsType === 'crew'
            ? 'text-primary bg-secondary opacity-90 border-secondary'
            : 'border-white border-opacity-80 text-white text-opacity-80'
        }`}
      >
        Crew
      </span>
    </div>
  );
};

export default CastCrewSwitchButtons;
