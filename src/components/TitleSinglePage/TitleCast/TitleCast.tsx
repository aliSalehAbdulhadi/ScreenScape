'use client';

import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import GridComp from '../../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';
import CastCard from '../../Cards/CastCard/CastCard';

export const TitleCast = ({ cast }: { cast: any }) => {
  return (
    <GridComp title="Cast">
      {cast?.map(
        (actor: any, i: number) =>
          i < 10 && (
            <DelayDisplay key={uuidv4()} delay={i * 50}>
              <Link
                href={`/actor/${actor?.id}`}
                className="flex flex-col  cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
              >
                <CastCard
                  index={i}
                  imageUrl={actor?.profile_path}
                  characterName={actor?.character}
                  actorName={actor?.original_name}
                />
              </Link>
            </DelayDisplay>
          )
      )}
    </GridComp>
  );
};
