import DisplaySlider from '../../Sliders/DisplaySlider/DisplaySlider';

const movieGenres = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 10749, name: 'Romance' },
];
const DisplayComp = () => {
  return (
    <div>
      {movieGenres.map((genre, i) => {
        // to re-render the component to hide the last line
        i++;
        return (
          <div key={genre.id} className=" mt-10 w-[100%] flex flex-col">
            <span className="ml-9 text-2xl mb-3 text-secondary">
              {genre.name}
            </span>
            <DisplaySlider />
            <div
              className={`h-[1px] w-[80%] bg-secondary mt-10 self-center bg-opacity-50 ${
                movieGenres.length === i ? 'hidden' : ''
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayComp;
