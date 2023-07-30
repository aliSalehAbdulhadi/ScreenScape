import React, { memo, useCallback, useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import SeasonsCard from '../../Cards/SeasonsCard/SeasonsCard';
import Modal from '../../WrapperComponents/Modal/Modal';
import TitleEpisodes from '../TitleEpisodes/TitleEpisodes';
import useGetSeasons from '@/src/fetch/getTvShowSeasons';

const TitleSeasons = ({
  titleId,
  numberOfSeasons,
}: {
  titleId: string;
  numberOfSeasons: number;
}) => {
  const [open, setOpen] = useState(false);
  const [openEpisodesModal, setOpenEpisodesModal] = useState(false);
  const [disableOnClose, setDisableOnClose] = useState<boolean>(false);

  const [episodes, setEpisodes] = useState<any>([]);

  const [lastSeason, allSeasons, loadingLastSeason, loadingAllSeasons, error] =
    useGetSeasons(titleId, numberOfSeasons, open);

  return (
    <div>
      <div className="flex items-center">
        <span className="text-secondary text-sm xxxs:text-base sm:text-lg mr-5">
          Latest Season
        </span>
        <span
          onClick={() => setOpen(true)}
          className={` text-white text-opacity-80 cursor-pointer text-sm transition-all hover:text-opacity-90 mr-5 ${
            numberOfSeasons <= 1 && 'hidden'
          }`}
        >
          View All Seasons
        </span>
      </div>
      <div
        onClick={() => {
          setOpenEpisodesModal(true);
          setOpen(false);
          setDisableOnClose(true);
          setEpisodes(lastSeason?.episodes);
        }}
      >
        <SeasonsCard data={lastSeason} />
      </div>

      <Modal
        data={allSeasons}
        width={80}
        animationCloseTime={190}
        open={open}
        setOpen={setOpen}
      >
        {allSeasons?.map((season: any, i: number) => (
          <div
            key={i}
            onClick={() => {
              setOpenEpisodesModal(true);
              setOpen(false);
              setDisableOnClose(false);
              setEpisodes(season?.episodes);
            }}
          >
            <div className=" px-1 xs:px-2 semiSm:px-0">
              <SeasonsCard data={season} />
            </div>
          </div>
        ))}
      </Modal>

      <Modal
        data={episodes}
        width={80}
        animationCloseTime={190}
        open={openEpisodesModal}
        setOpen={setOpenEpisodesModal}
        onClose={() => disableOnClose || setOpen(true)}
        closeIcon={
          disableOnClose ? null : <TiArrowBack className="w-full h-full" />
        }
      >
        <div className=" px-1 xs:px-2 semiSm:px-0">
          <TitleEpisodes data={episodes} />
        </div>
      </Modal>
    </div>
  );
};

export default memo(TitleSeasons);
