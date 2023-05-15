import { v4 as uuidv4 } from 'uuid';
import React, { memo, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import CollectionCard from '../../Cards/CollectionCard/CollectionCard';
import Modal from '../../WrapperComponents/Modal/Modal';
import GridComp from '../../WrapperComponents/GridComp/GridComp';
import PosterCard from '../../Cards/PosterCard/PosterCard';
import LazyLoading from '../../WrapperComponents/LazyLoading/LazyLoading';
import DelayDisplay from '../../WrapperComponents/DelayDisplay/DelayDisplay';

const TitleCollection = ({
  collectionId,
  mediaType,
}: {
  collectionId: string;
  mediaType: string;
}) => {
  const [collection, setCollection] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [slidersInView, setSlidersInView] = useState<number>(20);

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
        <GridComp center={true} breakPointWidth={12} className="relative">
          {collection?.parts?.map(
            (title: any, i: number) =>
              slidersInView >= i && (
                <LazyLoading
                  setItemsInView={setSlidersInView}
                  itemsInView={slidersInView}
                  perView={20}
                  index={i}
                  key={uuidv4()}
                >
                  <div>
                    <DelayDisplay delay={i * 50}>
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
                </LazyLoading>
              )
          )}
        </GridComp>
      </Modal>
    </div>
  );
};

export default memo(TitleCollection);
