'use client';

import Image from 'next/image';
import Link from 'next/link';
import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';
import PosterPicPlaceholder from '../../Placeholders/PosterPicPlaceholder/PosterPicPlaceholder';
import { useState } from 'react';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';

const ActorAppearedIn = ({ appearedInMovies }: { appearedInMovies: any }) => {
  const [loading, setLoading] = useState(true);

  return (
    <GridComp title="Appeared In">
      {appearedInMovies?.map(
        (title: any, i: any) =>
          i < 10 && (
            <DelayDisplay key={title?.id} delay={i * 50}>
              <Link
                href={`/browse/${title?.id}`}
                className=" mb-3 cursor-pointer w-fit"
              >
                <PosterPicPlaceholder
                  title={title?.title}
                  condition={title?.poster_path}
                >
                  {loading && (
                    <div className="h-[17rem]  w-[12rem] ">
                      <LoadingPicture />
                    </div>
                  )}
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${title?.poster_path}`}
                    width={150}
                    height={150}
                    alt="Actor Image"
                    className={`h-[240px] w-[180px] object-fit rounded ${
                      loading === false ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() =>
                      setTimeout(() => {
                        setLoading(false);
                      }, i * 100)
                    }
                  />
                </PosterPicPlaceholder>
              </Link>
            </DelayDisplay>
          )
      )}
    </GridComp>
  );
};

export default ActorAppearedIn;
