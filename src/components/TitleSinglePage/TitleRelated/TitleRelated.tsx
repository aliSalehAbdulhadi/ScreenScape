'use client';

import Image from 'next/image';
import Link from 'next/link';
import GridComp from '../../GridComp/GridComp';
import DelayDisplay from '../../DelayDisplay/DelayDisplay';
import PosterPicPlaceholder from '../../Placeholders/PosterPicPlaceholder/PosterPicPlaceholder';
import LoadingPicture from '../../LoadingComponent/LoadingPicture/LoadingPicture';
import { useState } from 'react';

const TitleRelated = ({ relatedTitles }: { relatedTitles: any }) => {
  const [loading, setLoading] = useState(true);

  return (
    <GridComp title="Related">
      {relatedTitles?.map(
        (title: any, i: number) =>
          i < 10 && (
            <DelayDisplay key={title?.id} delay={i * 50}>
              <Link
                href={`/browse/${title?.id}`}
                className=" mb-3 cursor-pointer w-fit "
              >
                <PosterPicPlaceholder
                  condition={title?.poster_path}
                  title={title?.original_title}
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
                    alt="Title Image"
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

export default TitleRelated;
