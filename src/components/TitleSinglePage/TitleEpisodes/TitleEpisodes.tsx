import React from 'react';
import EpisodeCard from '../../Cards/EpisodeCard/EpisodeCard';

const TitleEpisodes = ({ data }: { data: any }) => {
  return (
    <div>
      {data?.map((episode: any) => (
        <EpisodeCard key={episode?.episode_number} data={episode} />
      ))}
    </div>
  );
};

export default TitleEpisodes;
