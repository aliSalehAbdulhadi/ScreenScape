import dynamic from 'next/dynamic';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { Suspense } from 'react';
import { getMoviesWithTrailers } from '@/src/fetch/getMoviesWithTrailer';
import { getDisplaySlideData } from '@/src/fetch/getDisplaySlideData';

const TrailerSlider = dynamic(
  () => import('../Sliders/TrailerSlider/TrailerSlider')
);
const DisplayComp = dynamic(() => import('./DisplayComp/DisplayComp'));

const LandingPage = async () => {
  const displaySlideContent: { apiKey: any; name: string }[] = [
    {
      name: 'Now Playing Movies',
      apiKey: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=2`,
    },
    {
      name: 'Popular Movies',
      apiKey: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=2`,
    },
    {
      name: 'Top Rated Movies',
      apiKey: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    },
    {
      name: 'Upcoming Movies',
      apiKey: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=2`,
    },
  ];
  const displaySliderData = await getDisplaySlideData(displaySlideContent);

  const moviesWithTrailers: any = await getMoviesWithTrailers();

  return (
    <div className="flex flex-col items-center background-fade md:py-[6rem] fade-in">
      <LoadingComponent>
        <Suspense>
          <div className="w-[100%]">
            <TrailerSlider data={moviesWithTrailers} />
          </div>
        </Suspense>

        <Suspense>
          <div className="w-[100%]">
            <DisplayComp data={displaySliderData} />
          </div>
        </Suspense>
      </LoadingComponent>
    </div>
  );
};

export default LandingPage;
