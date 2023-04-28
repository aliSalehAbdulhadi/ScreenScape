'use client';

import Image from 'next/image';
import Link from 'next/link';
import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';
import ActorPicPlaceholder from '../../Placeholders/ActorPicPlaceholder/ActorPicPlaceholder';
import { useState } from 'react';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';

export const TitleCast = ({ cast }: { cast: any }) => {
  const [loading, setLoading] = useState(true);

  return (
    <GridComp title="Cast">
      {cast?.map(
        (actor: any, i: number) =>
          i < 10 && (
            <DelayDisplay key={actor.id} delay={i * 50}>
              <Link
                href={`/actor/${actor?.id}`}
                className="flex flex-col  mb-3 cursor-pointer bg-white bg-opacity-10 h-[23rem] w-[12rem] rounded overflow-hidden"
              >
                <ActorPicPlaceholder condition={actor?.profile_path}>
                  {loading && (
                    <div className="h-[20rem]">
                      <LoadingPicture />
                    </div>
                  )}
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                    width={250}
                    height={250}
                    alt="Actor Image"
                    className={`h-[250px] w-[200px] object-fit ${
                      loading === false ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() =>
                      setTimeout(() => {
                        setLoading(false);
                      }, i * 100)
                    }
                  />
                </ActorPicPlaceholder>
                <div className="px-2 mt-2 flex flex-col w-[100%]">
                  <span className="mt-2">{actor.character}</span>
                  <span className=" text-sm opacity-75 w-full">
                    {actor.original_name}
                  </span>
                </div>
              </Link>
            </DelayDisplay>
          )
      )}
    </GridComp>
  );
};
