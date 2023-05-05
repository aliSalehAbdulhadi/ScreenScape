'use client';

import useWindowSize from '@/src/hooks/useWindowsSize';

import LargeScreenContent from './LargeScreenContent/LargeScreenContent';
import SmallScreenContent from './SmallScreenContent/SmallScreenContent';
import { memo } from 'react';

const TitleRelated = ({
  relatedTitles,
  mediaType,
}: {
  relatedTitles: any;
  mediaType: string;
}) => {
  const width = useWindowSize();

  return (
    <div>
      {width >= 640 ? (
        <LargeScreenContent
          relatedTitles={relatedTitles}
          mediaType={mediaType}
        />
      ) : (
        <SmallScreenContent
          relatedTitles={relatedTitles}
          mediaType={mediaType}
        />
      )}
    </div>
  );
};

export default memo(TitleRelated);
