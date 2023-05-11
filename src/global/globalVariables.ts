export const imageQualityLargeScreen = 40;
export const imageQualitySmallScreen = 30;

export const dataObject = (data: any, mediaType: string) => {
  let posterUrl = data?.poster_path;
  let title = mediaType === 'movie' ? data?.title : data?.name;
  let releaseDate =
    mediaType === 'movie' ? data?.release_date : data?.first_air_date;
  let endedDate = data?.last_air_date;
  let isAdult = data?.adult;
  let voteAverage = data?.vote_average;
  let overview = data?.overview;
  let seasons = data?.number_of_seasons;
  let episodes = data?.number_of_episodes;
  let seriesStatus = data?.status;
  let rated = data?.rated;
  let ratings = data?.ratings;
  let awards = data?.Awards;
  return {
    posterUrl,
    title,
    releaseDate,
    endedDate,
    isAdult,
    voteAverage,
    overview,
    seasons,
    episodes,
    seriesStatus,
    rated,
    ratings,
    awards,
  };
};
