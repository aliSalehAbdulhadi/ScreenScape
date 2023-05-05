'use client';

import { Dispatch, SetStateAction } from 'react';
import LargeScreenContent from './LargeScreenContent/LargeScreenContent';
import SmallScreenContent from './SmallScreenContent/SmallScreenContent';
import useWindowSize from '@/src/hooks/useWindowsSize';

const ActorAppearedIn = ({
  appearedInTitles,
  setMediaType,
  mediaType,
}: {
  appearedInTitles: any;
  setMediaType: Dispatch<SetStateAction<string>>;
  mediaType: string;
}) => {
  const width = useWindowSize();

  return (
    <div>
      {width >= 640 ? (
        <LargeScreenContent
          appearedInTitles={appearedInTitles}
          mediaType={mediaType}
          setMediaType={setMediaType}
        />
      ) : (
        <SmallScreenContent
          mediaType={mediaType}
          appearedInTitles={appearedInTitles}
          setMediaType={setMediaType}
        />
      )}
    </div>
  );
};

export default ActorAppearedIn;
