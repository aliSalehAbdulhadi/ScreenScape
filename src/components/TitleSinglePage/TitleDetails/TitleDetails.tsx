import { v4 as uuidv4 } from 'uuid';
import { checkDataAvailability } from '@/src/helper/checkDataAvailability';
import keywordsExtractHandler from '@/src/helper/keywordsExtractHandler';
import { formatCurrency } from '@/src/helper/formatCurrency';
import { HiOutlineExternalLink } from 'react-icons/hi';

const TitleDetails = ({ data }: { data: any }) => {
  const keywords = keywordsExtractHandler(data?.overview);
  return (
    <div>
      <div className="flex items-start justify-around flex-row md:flex-col w-full text-sm xxs:text-base">
        <div className="flex flex-col w-full  mr-5">
          {data?.homepage && (
            <div
              onClick={() => window?.open(data?.homepage)}
              className="mb-5 flex  w-full items-center cursor-pointer transition hover:opacity-90"
            >
              <span className=" font-semibold mr-1">Website</span>
              <HiOutlineExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mb-[2px]" />
            </div>
          )}

          <div className="mb-5 flex flex-col w-full">
            <span className=" font-semibold">Tagline </span>
            <span className="text-white text-opacity-80 font-averia">
              {`${checkDataAvailability(`"${data?.tagline}"`)}`}
            </span>
          </div>

          {data?.networks && (
            <div className="mb-5 flex flex-col w-full">
              <span className=" font-semibold">Networks</span>
              {data?.networks?.map((network: any) => {
                return (
                  <div className="col-span-1 text-opacity-80" key={network?.id}>
                    <span>{network?.name}</span>
                  </div>
                );
              })}
            </div>
          )}

          {data?.type && (
            <div className="mb-5 flex flex-col">
              <span className=" font-semibold">Type </span>
              <span className="text-white text-opacity-80">
                {checkDataAvailability(data?.type)}
              </span>
            </div>
          )}

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

          <div className="mb-5 flex flex-col ">
            <span className=" font-semibold">Spoken Languages</span>
            <div className="text-white text-opacity-80  grid col-span-1">
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

          <div
            className={`mb-5  flex-col ${data?.revenue ? 'flex' : 'hidden'}`}
          >
            <span className=" font-semibold">Revenue </span>
            <span className="text-white text-opacity-80">
              {checkDataAvailability(formatCurrency(data?.revenue))}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5 flex flex-col">
        <span className=" font-semibold mb-1">Keywords </span>
        <div className="flex flex-wrap  w-[100%] md:w-[90%]">
          {keywords?.map(
            (word, i) =>
              i <= 10 && (
                <span
                  key={uuidv4()}
                  className="bg-white text-white bg-opacity-30 p-2 text-xs sm:text-sm rounded mr-1 mb-1 cursor-pointer"
                >
                  {word}
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleDetails;