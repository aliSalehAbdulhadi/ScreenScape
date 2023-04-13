import { BsPlayFill } from 'react-icons/bs';
import MainButton from '@/src/components/Buttons/MainButton/MainButton';
import PlusButton from '@/src/components/Buttons/PlusButton/PlusButton';
import PosterSlider from '@/src/components/Sliders/PostersSlider/PosterSlider';

const TitleInfo = () => {
  return (
    <div>
      {' '}
      <div className="flex h-[30rem] relative">
        <div className="w-[26vw] overflow-hidden rounded ">
          <PosterSlider />
        </div>

        <div className="ml-5 w-[37%]">
          <div className="flex items-center">
            <span className="text-3xl flex items-center w-[80%] mt-2">
              John Wick
            </span>
          </div>
          <div className="text-offWhite text-opacity-75  mt-3 w-fit">
            <div className="grid grid-cols-2 grid-rows-2 gap-1 text-xs ">
              <span className="underline cursor-pointer">Action</span>
              <span className="underline cursor-pointer">Thriller</span>
              <span className="underline cursor-pointer">Crime Film</span>
              <span className="underline cursor-pointer">Adventure</span>
            </div>

            <div>
              <div className="flex items-center mt-16">
                <span className="border-[1px] p-1 border-white border-opacity-75 mr-5">
                  +18
                </span>
                <span>2019</span>
              </div>

              <div className="mt-5">
                <span>Duration: 106 mins </span>
              </div>

              <div className="flex flex-col justify-center self-end mt-5">
                <span className="mb-2">7.6 IMDB</span>
                <span>92% Community</span>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-0 flex items-center">
            <div className="mr-5">
              <MainButton>
                <BsPlayFill size={25} className="" />
                <span className="mr-2 text-lg">Trailer</span>
              </MainButton>
            </div>
            <PlusButton size={25} />
          </div>
        </div>

        <div className="w-[55%] ">
          <span className="text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            aliquam nisi pariatur unde quibusdam vitae blanditiis,
            exercitationem impedit explicabo beatae porro. Quo eveniet magnam
            cupiditate, voluptates incidunt dignissimos esse quasi! Aliquam,
            exercitationem unde. Illo natus fuga nam cumque porro deserunt
            vitae, voluptates similique, ex facere assumenda nisi pariatur quas
            quia?
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleInfo;
