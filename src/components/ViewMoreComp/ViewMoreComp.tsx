import React, { memo, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import GridComp from '../WrapperComponents/GridComp/GridComp';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import PosterCard from '../Cards/PosterCard/PosterCard';
import Modal from '../WrapperComponents/Modal/Modal';
import CreditsCard from '../Cards/CreditsCard/CreditsCard';
import SmallTextButton from './SmallTextButton/SmallTextButton';
import { dataObject } from '@/src/global/globalVariables';
import LazyLoad from '../WrapperComponents/LazyLoad/LazyLoad';

const ViewMoreComp = ({
  titles,
  mediaType,
  setPageNum,
  pageNum,
  loading,
  totalPages,
}: {
  titles: any[];
  mediaType: string;
  setPageNum?: any;
  pageNum?: number;
  loading?: boolean;
  totalPages?: number;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleVisible = useRef(() => {
    setVisibleCount((count) => count + 2);
  });

  const loadMoreDataHandler = () => {
    setPageNum((prev: number) => prev + 1);
  };

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMoreCurren = loadMoreRef?.current;
    if (totalPages && pageNum) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading && totalPages > pageNum) {
            loadMoreDataHandler();
          }
        });
      });
      if (loadMoreCurren) {
        observer.observe(loadMoreCurren);
      }
      return () => {
        if (loadMoreCurren) {
          observer.unobserve(loadMoreCurren);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, pageNum, totalPages]);

  return (
    <div
      className={`h-full relative  rounded  ${titles?.length < 10 && 'hidden'}`}
    >
      <SmallTextButton setOpen={setOpen} />

      <Modal
        data={titles}
        width={80}
        animationCloseTime={190}
        open={open}
        setOpen={setOpen}
      >
        <GridComp center={true} breakPointWidth={12} className="relative pb-5">
          {titles?.slice(0, visibleCount).map((title: any, i: number) => (
            <LazyLoad key={i} threshold={0.8} onVisible={handleVisible.current}>
              <div>
                <DelayDisplay delay={i * 50}>
                  <Link
                    href={`/${mediaType !== 'actor' ? 'browse/' : ''}${
                      mediaType === 'actor' ? 'person' : mediaType
                    }/${title?.id}`}
                    className="flex flex-col  cursor-pointer h-[23rem] w-[12rem] rounded overflow-hidden bg-primary bg-opacity-7  0"
                  >
                    {mediaType === 'actor' ? (
                      <CreditsCard
                        index={i}
                        data={title}
                        mediaType={title?.total_episode_count ? 'tv' : 'movie'}
                      />
                    ) : (
                      <PosterCard
                        index={i}
                        imageUrl={dataObject(title, mediaType)?.posterUrl}
                        title={dataObject(title, mediaType)?.title}
                        releaseDate={dataObject(title, mediaType)?.releaseDate}
                        rating={dataObject(title, mediaType)?.voteAverage * 10}
                        mediaType={mediaType}
                      />
                    )}
                  </Link>
                </DelayDisplay>
              </div>
            </LazyLoad>
          ))}
          <div ref={loadMoreRef} />
        </GridComp>

        {loading && (
          <div className="absolute bottom-1 translate-x-[-50%] left-[50%] scale-50">
            <div className="spinner scale-50">
              <div className="spinner-inner"></div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default memo(ViewMoreComp);
