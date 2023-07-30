import LoadingSkeleton from '../../LoadingComponent/LoadingSkeleton/LoadingSkeleton';
import BackgroundOverlay from '../../TitleSinglePage/TitleInfo/BackgroundOverlay/BackgroundOverlay';
import { checkDataAvailability } from '@/src/helper/checkDataAvailability';

const CollectionCard = ({
  data,
  setOpen,
  loading,
}: {
  data: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}) => {
  return (
    <div className=" w-full flex justify-center  overflow-hidden h-[250px] rounded">
      <BackgroundOverlay hideBgInSemiSm={false} imageUrl={data?.backdrop_path}>
        <div className="flex flex-col justify-center   px-5 w-full h-full">
          <div>
            <LoadingSkeleton
              data={
                <span className="text-lg sm:text-2xl font-bold">{`Belongs to the ${data?.name}`}</span>
              }
              loading={loading}
              height={30}
              width={100}
            />
          </div>
          <div className="text-white text-opacity-90 mt-1 text-sm sm:text-base w-full sm:w-[90%] max-h-[7.5rem] overflow-y-auto scrollBar">
            <LoadingSkeleton
              data={checkDataAvailability(data?.overview)}
              loading={loading}
              height={70}
            />
          </div>

          <div className={`flex items-center ${loading && ' mt-5'}`}>
            <LoadingSkeleton
              data={
                <div className="flex items-center">
                  <div
                    onClick={() => setOpen(true)}
                    className="mt-5 py-2 px-3 text-xs sm:text-sm rounded-2xl bg-white w-fit sm:w-fit text-black cursor-pointer hover:bg-opacity-90 transition-all"
                  >
                    <span>View Collection</span>
                  </div>
                  <span className="text-sm sm:text-base ml-3 pt-[20px] text-white text-opacity-60 ">{`(${data?.parts?.length} Parts)`}</span>
                </div>
              }
              loading={loading}
              height={30}
              width={150}
            />
          </div>
        </div>
      </BackgroundOverlay>
    </div>
  );
};

export default CollectionCard;
