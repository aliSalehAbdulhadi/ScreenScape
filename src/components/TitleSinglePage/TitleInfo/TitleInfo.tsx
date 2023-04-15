import { BsPlayFill } from 'react-icons/bs';
import MainButton from '@/src/components/Buttons/MainButton/MainButton';
import PlusButton from '@/src/components/Buttons/PlusButton/PlusButton';
import PosterSlider from '@/src/components/Sliders/PostersSlider/PosterSlider';
import Genres from './Genres/Genres';
import Rating from './Rating/Rating';
import StreamedOn from './StreamedOn/StreamedOn';

const TitleInfo = () => {
  return (
    <div className="flex relative w-full">
      <div className="flex w-[100%]  pr-5">
        <div className="w-[40vw] semiSm:w-[20vw] rounded ">
          <PosterSlider />
        </div>

        <div className="ml-5">
          <div className="text-sm  grid grid-cols-fluidNarrow w-[70%] gap-x-2">
            <div className=" w-fit">
              <span className="text-3xl text-offWhite flex items-center ">
                John Wick
              </span>
              <div className="text-offWhite text-opacity-75 w-fit mb-5 ">
                <Genres />
              </div>
            </div>
            <div className=" w-fit opacity-75">
              <div className="flex items-center mb-5 ">
                <span className="border-[1px] p-1 border-white border-opacity-75 mr-3">
                  +18
                </span>
                <span>2019</span>
              </div>

              <div className="mb-5 ">
                <span>Duration: 106 mins</span>
              </div>
            </div>

            <div className="flex  w-fit mr-5">
              <div className="mb-7 mr-5 opacity-75">
                <Rating />
              </div>
              <div className="opacity-75">
                <StreamedOn />
              </div>
            </div>

            <div className=" flex self-start items-center">
              <MainButton className="mr-3">
                <BsPlayFill size={25} className="" />
                <span className="mr-2 text-lg">Trailer</span>
              </MainButton>
              <PlusButton size={25} />
            </div>
          </div>
          <div className="w-[90%] mt-5">
            <span className="text-lg leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              aliquam nisi pariatur unde quibusdam vitae blanditiis,
              exercitationem impedit explicabo beatae porro. Quo eveniet magnam
              cupiditate, voluptates incidunt dignissimos esse quasi! Aliquam,
              exercitationem unde. Illo natus fuga nam cumque porro deserunt
              vitae, voluptates similique, ex facere assumenda nisi pariatur
              quas quia?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleInfo;
