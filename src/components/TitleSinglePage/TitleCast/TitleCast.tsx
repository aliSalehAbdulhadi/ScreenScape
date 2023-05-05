import { Dispatch, SetStateAction, memo } from 'react';
import LargeScreenContent from './LargeScreenContent/LargeScreenContent';
import SmallScreenContent from './SmallScreenContent/SmallScreenContent';
import useWindowSize from '@/src/hooks/useWindowsSize';

LargeScreenContent;

const TitleCast = ({
  credits,
  setCreditsType,
  creditsType,
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
}) => {
  const width = useWindowSize();
  return (
    <div>
      {width >= 640 ? (
        <LargeScreenContent
          credits={credits}
          setCreditsType={setCreditsType}
          creditsType={creditsType}
        />
      ) : (
        <SmallScreenContent
          credits={credits}
          setCreditsType={setCreditsType}
          creditsType={creditsType}
        />
      )}
    </div>
  );
};

export default memo(TitleCast);
