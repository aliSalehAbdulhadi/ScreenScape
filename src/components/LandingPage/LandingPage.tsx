import dynamic from 'next/dynamic';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { Suspense } from 'react';

const TrailerSlider = dynamic(
  () => import('../Sliders/TrailerSlider/TrailerSlider')
);

const DisplayComp = dynamic(() => import('./DisplayComp/DisplayComp'));

const LandingPage = async () => {
  const displaySlideContent: { apiKey: any; name: string }[] = [
    {
      name: 'Now Playing Movies',
      apiKey: process.env.NEXT_PUBLIC_NOW_PLAYING_MOVIES,
    },
    {
      name: 'Popular Movies',
      apiKey: process.env.NEXT_PUBLIC_POPULAR_MOVIES,
    },
    {
      name: 'Top Rated Movies',
      apiKey: process.env.NEXT_PUBLIC_TOP_RATED_MOVIES,
    },
    {
      name: 'Upcoming Movies',
      apiKey: process.env.NEXT_PUBLIC_UPCOMING_MOVIES,
    },
  ];

  const trailerSliderRequest = await fetch(
    String(process.env.NEXT_PUBLIC_TRENDING)
  );
  const TrailerSliderData = await trailerSliderRequest.json();

  const displaySliderData = await Promise.all(
    displaySlideContent.map(async (item) => {
      const displaySliderRequest = await fetch(item.apiKey);
      const displaySliderResponse = await displaySliderRequest.json();
      return { name: item.name, displaySliderResponse };
    })
  );

  return (
    <div className="flex flex-col items-center background-fade md:py-[6rem] fade-in">
      <LoadingComponent>
        <Suspense>
          <div className="w-[100%]">
            <TrailerSlider data={TrailerSliderData.results} />
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
