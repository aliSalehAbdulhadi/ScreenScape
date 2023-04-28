export async function getMoviesWithTrailers() {
  const trailerSliderRequest = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const trailerSliderData = await trailerSliderRequest.json();

  const trailerRequests = trailerSliderData.results.map((movie: any) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
  });

  const trailerResponses = await Promise.all(trailerRequests);

  const trailerData = await Promise.all(
    trailerResponses.map((response) => {
      return response.json();
    })
  );

  trailerData.forEach((data, index) => {
    if (data.results && data.results.length > 0) {
      trailerSliderData.results[index].trailer = data.results[0];
    } else {
      trailerSliderData.results[index].trailer = null;
    }
  });

  const moviesWithTrailers = trailerSliderData.results.filter(
    (movie: any) => movie.trailer !== null
  );

  return moviesWithTrailers;
}
