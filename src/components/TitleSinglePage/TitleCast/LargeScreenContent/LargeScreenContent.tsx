import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import GridComp from '../../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../../WrapperComponents/DelayDisplay/DelayDisplay';
import CastCard from '../../../Cards/CreditsCard/CreditsCard';
import LoadingCard from '@/src/components/LoadingComponent/LoadingCard/LoadingCard';
import { Dispatch, SetStateAction, Suspense, lazy } from 'react';
import CastCrewSwitchButtons from '../CastCrewSwitchButtons/CastCrewSwitchButtons';

const ViewMoreComp = lazy(
  () => import('@/src/components/ViewMoreComp/ViewMoreComp')
);

const LargeScreenContent = ({
  credits,
  setCreditsType,
  creditsType,
}: {
  credits: any[];
  creditsType: string;
  setCreditsType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <GridComp breakPointWidth={12} title="Cast" className="relative">
      <div className=" absolute top-[5px] left-10 xxxs:left-16 flex items-center justify-center text-xs xs:text-sm ">
        <CastCrewSwitchButtons
          setCreditsType={setCreditsType}
          creditsType={creditsType}
        />
      </div>

      {credits?.map(
        (person: any, i: number) =>
          i < 10 && (
            <DelayDisplay key={uuidv4()} delay={i * 50}>
              <Link
                href={`/person/${person?.id}`}
                className="flex flex-col  cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
              >
                <CastCard
                  index={i}
                  imageUrl={person?.profile_path}
                  characterName={person?.character}
                  job={person?.job}
                  personName={person?.original_name}
                />
              </Link>
            </DelayDisplay>
          )
      )}

      <Suspense fallback={<LoadingCard />}>
        <ViewMoreComp mediaType="actor" titles={credits} />
      </Suspense>
    </GridComp>
  );
};

export default LargeScreenContent;
