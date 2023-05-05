'use client';

import LargeScreenContent from './LargeScreenContent/LargeScreenContent';
import SmallScreenContent from './SmallScreenContent/SmallScreenContent';

const TitleRelated = ({
  relatedTitles,
  mediaType,
}: {
  relatedTitles: any;
  mediaType: string;
}) => {
  return (
    <div>
      <LargeScreenContent relatedTitles={relatedTitles} mediaType={mediaType} />
      <SmallScreenContent relatedTitles={relatedTitles} mediaType={mediaType} />
    </div>
  );
};

export default TitleRelated;
