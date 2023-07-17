import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { getMoviesWithTrailers } from '@/src/fetch/getMoviesWithTrailer';
import { getDisplaySlideData } from '@/src/fetch/getDisplaySlideData';

const TrailerSlider = dynamic(
  () => import('../Sliders/HeroSlider/HeroSlider')
);
const DisplayComp = dynamic(() => import('./DisplayComp/DisplayComp'));

const LandingPage = async () => {
  const displaySlideContent: {
    apiKey: any;
    name: string;
    mediaType: string;
  }[] = [
    {
      name: 'Now Playing Movies',
      apiKey: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&vote_count.gte=500`,
      mediaType: 'movie',
    },
    {
      name: 'Popular Movies',
      apiKey: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&vote_count.gte=2500`,
      mediaType: 'movie',
    },
    {
      name: 'Top Rated Movies',
      apiKey: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&vote_count.gte=2000`,
      mediaType: 'movie',
    },
    {
      name: 'Upcoming Movies',
      apiKey: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
      mediaType: 'movie',
    },

    {
      name: 'Popular TV Shows',
      apiKey: ` https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&vote_count.gte=2500`,
      mediaType: 'tv',
    },
    {
      name: 'On Air TV Shows',
      apiKey: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&vote_count.lte=100`,
      mediaType: 'tv',
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
