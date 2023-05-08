import { v4 as uuidv4 } from 'uuid';
import { checkDataAvailability } from '@/src/helper/checkDataAvailability';
import keywordsExtractHandler from '@/src/helper/keywordsExtractHandler';
import { formatCurrency } from '@/src/helper/formatCurrency';

const TitleDetails = ({ data }: { data: any }) => {
  const keywords = keywordsExtractHandler(data?.overview);
  return (
    <div className="flex items-start justify-around flex-row-reverse md:flex-col w-full text-xs xxxs:text-sm xxs:text-base">
      <div className="flex flex-col  mr-5">
        <div className="mb-5 flex flex-col w-full">
          <span className=" font-semibold">Tagline </span>
          <span className="text-white text-opacity-80">
            {`"${checkDataAvailability(data?.tagline)}"`}
          </span>
        </div>

        <div className="mb-5 flex flex-col">
          <span className=" font-semibold">Status </span>
          <span className="text-white text-opacity-80">
            {checkDataAvailability(data?.status)}
          </span>
        </div>

        <div className="mb-5 flex flex-col">
          <span className=" font-semibold">Type </span>
          <span className="text-white text-opacity-80">
            {checkDataAvailability(data?.type)}
          </span>
        </div>

        <div
          className={`mb-5  flex-col  ${
            data?.episode_run_time ? 'flex' : 'hidden'
          }`}
        >
          <span className=" font-semibold">Episode runtime </span>
          <span className="text-white text-opacity-80">
            {checkDataAvailability(data?.episode_run_time) + 'm'}
          </span>
        </div>

        <div className="mb-5 flex flex-col">
          <span className=" font-semibold">Original Languages </span>
          <span className="text-white text-opacity-80">
            {checkDataAvailability(data?.original_language)}
          </span>
        </div>

        <div className="mb-5 flex flex-col ">
          <span className=" font-semibold">Spoken Languages</span>
          <div className="text-white text-opacity-80">
            {data?.spoken_languages
              ? data?.spoken_languages?.map((language: any) => (
                  <span key={uuidv4()}>{language?.name}</span>
                ))
              : '-'}
          </div>
        </div>

        <div className="mb-5 flex flex-col">
          <span className=" font-semibold">Origin Country </span>
          <div className="text-white text-opacity-80">
            {data?.origin_country
              ? data?.origin_country?.map((country: any) => (
                  <span key={uuidv4()}>{country}, </span>
                ))
              : '-'}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="mb-5 flex flex-col">
          <span className=" font-semibold">Production Companies </span>

          <div className="text-white text-opacity-80 grid col-span-1">
            {data?.production_companies?.map((company: any) => (
              <span key={uuidv4()}>{company?.name} </span>
            ))}
          </div>
        </div>

        <div className="mb-5 flex flex-col">
          <span className=" font-semibold">Production Country</span>
          <div className="text-white text-opacity-80">
            {data?.production_countries?.map((country: any) => (
              <span key={uuidv4()}>{country?.name}</span>
            ))}
          </div>
        </div>

        <div className={`mb-5  flex-col ${data?.budget ? 'flex' : 'hidden'}`}>
          <span className=" font-semibold">Budget </span>
          <span className="text-white text-opacity-80">
            {checkDataAvailability(formatCurrency(data?.budget))}
          </span>
        </div>

        <div className={`mb-5  flex-col ${data?.revenue ? 'flex' : 'hidden'}`}>
          <span className=" font-semibold">Revenue </span>
          <span className="text-white text-opacity-80">
            {checkDataAvailability(formatCurrency(data?.revenue))}
          </span>
        </div>

        <div className="mb-5 flex flex-col">
          <span className=" font-semibold mb-1">Keywords </span>
          <div className="flex flex-wrap w-[70%] md:w-full">
            {keywords?.map(
              (word, i) =>
                i <= 10 && (
                  <span
                    key={uuidv4()}
                    className="bg-white text-white bg-opacity-30 p-2 text-sm rounded mr-1 mb-1 cursor-pointer"
                  >
                    {word}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleDetails;
