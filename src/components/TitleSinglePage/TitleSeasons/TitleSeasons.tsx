import React, { useCallback, useEffect, useState } from 'react';
import SeasonsCard from '../../Cards/SeasonsCard/SeasonsCard';
import Modal from '../../WrapperComponents/Modal/Modal';
import TitleEpisodes from '../TitleEpisodes/TitleEpisodes';
import { TiArrowBack } from 'react-icons/ti';

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

  const [lastSeason, setLastSeason] = useState<any>([]);
  const [allSeasons, setAllSeasons] = useState<any>([]);
  const [episodes, setEpisodes] = useState<any>([]);
  const lastSeasonFetch = useCallback(async () => {
    try {
      const request = await fetch(
        `https://api.themoviedb.org/3/tv//${titleId}/season/${numberOfSeasons}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      const results = await request?.json();

      setLastSeason(results);
    } catch (error) {}
  }, [numberOfSeasons, titleId]);
  const allSeasonsFetch = useCallback(async () => {
    try {
      const seasons = [];
      for (let i = 1; i <= numberOfSeasons; i++) {
        const request = await fetch(
          `https://api.themoviedb.org/3/tv/${titleId}/season/${i}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        );
        const results = await request?.json();
        seasons.push(results);
        setAllSeasons((seasonData: any) => [...seasonData, results]);
      }
      setAllSeasons(seasons);
    } catch (error) {
      // handle error
    }
  }, [numberOfSeasons, titleId]);

  useEffect(() => {
    lastSeasonFetch();
  }, [lastSeasonFetch]);

  useEffect(() => {
    if (open) {
      allSeasonsFetch();
    }
  }, [allSeasonsFetch, open]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-secondary text-lg  mr-5">Latest Season</span>
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
            <SeasonsCard data={season} />
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
        <TitleEpisodes data={episodes} />
      </Modal>
    </div>
  );
};

export default TitleSeasons;
