import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import CollectionCard from '../../Cards/CollectionCard/CollectionCard';
import Modal from '../../WrapperComponents/Modal/Modal';
import GridComp from '../../WrapperComponents/GridComp/GridComp';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';
import LazyLoad from '../../WrapperComponents/LazyLoad/LazyLoad';
import { delay } from '@/src/global/globalVariables';

const TitleCollection = ({
  collectionId,
  mediaType,
}: {
  collectionId: string;
  mediaType: string;
}) => {
  const [collection, setCollection] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleVisible = useRef(() => {
    setVisibleCount((count) => count + 2);
  });

  const collectionFetch = useCallback(async () => {
    try {
      const collectionRequest = await fetch(
        `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      const collectionResponse = await collectionRequest?.json();

      setCollection(collectionResponse);
    } catch (error) {}
  }, [collectionId]);

  useEffect(() => {
    collectionFetch();
  }, [collectionFetch]);

  return (
    <div>
      <CollectionCard setOpen={setOpen} data={collection} />
      <Modal
        data={collection?.parts}
        open={open}
        setOpen={setOpen}
        width={80}
        animationCloseTime={190}
      >
        <GridComp breakPointWidth={12} className="relative">
          {collection?.parts
            ?.slice(0, visibleCount)
            .map((title: any, i: number) => (
              <LazyLoad
                key={i}
                threshold={0.8}
                onVisible={handleVisible.current}
              >
                <div>
                  <DelayDisplay delay={delay(i)}>
                    <Link
                      href={`/browse/movie/${title?.id}`}
                      className="flex flex-col  cursor-pointer bg-primary  h-[23rem] w-[12rem] rounded overflow-hidden"
                    >
                      <PosterCard
                        index={i}
                        imageUrl={title?.poster_path}
                        title={title?.title}
                        releaseDate={title?.release_date}
                        rating={title?.vote_average * 10}
                        mediaType={mediaType}
                      />
                    </Link>
                  </DelayDisplay>
                </div>
              </LazyLoad>
            ))}
        </GridComp>
      </Modal>
    </div>
  );
};

export default memo(TitleCollection);
