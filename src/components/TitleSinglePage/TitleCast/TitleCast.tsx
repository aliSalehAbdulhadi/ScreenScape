import { Dispatch, SetStateAction } from 'react';
import LargeScreenContent from './LargeScreenContent/LargeScreenContent';
import SmallScreenContent from './SmallScreenContent/SmallScreenContent';

LargeScreenContent;

export const TitleCast = ({
  credits,
  setCreditsType,
  creditsType,
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <LargeScreenContent
        credits={credits}
        setCreditsType={setCreditsType}
        creditsType={creditsType}
      />
      <SmallScreenContent
        credits={credits}
        setCreditsType={setCreditsType}
        creditsType={creditsType}
      />
    </div>
  );
};
