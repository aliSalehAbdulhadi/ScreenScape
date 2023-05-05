'use client';

import { Dispatch, SetStateAction } from 'react';
import LargeScreenContent from './LargeScreenContent/LargeScreenContent';
import SmallScreenContent from './SmallScreenContent/SmallScreenContent';

const ActorAppearedIn = ({
  appearedInTitles,
  setMediaType,
  mediaType,
}: {
  appearedInTitles: any;
  setMediaType: Dispatch<SetStateAction<string>>;
  mediaType: string;
}) => {
  return (
    <div>
      <LargeScreenContent
        appearedInTitles={appearedInTitles}
        mediaType={mediaType}
        setMediaType={setMediaType}
      />

      <SmallScreenContent
        mediaType={mediaType}
        appearedInTitles={appearedInTitles}
        setMediaType={setMediaType}
      />
    </div>
  );
};

export default ActorAppearedIn;
