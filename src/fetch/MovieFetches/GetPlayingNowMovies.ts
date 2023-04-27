const GetPlayingNowMovies = async () => {
  const mostPopularAPI = process.env.NEXT_PUBLIC_NOW_PLAYING_MOVIES;

  const request = await fetch(`${mostPopularAPI}`);
  const data = await request.json();

  return data;
};

export default GetPlayingNowMovies;
