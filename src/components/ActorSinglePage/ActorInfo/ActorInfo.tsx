import Image from 'next/image';

const ActorInfo = () => {
  return (
    <div className="flex flex-col semiSm:flex-row min-h-[30rem]">
      <div className="flex flex-col sm:flex-row">
        <div className=" rounded self-center sm:self-start mb-5 sm:mb-0">
          <Image
            width={1280}
            height={1400}
            src="/images/licensed-image.jpeg"
            alt="Actor Photo"
            className="rounded h-full object-fit w-[30rem] sm:w-[25rem] semiSm:w-[35rem]"
          />
        </div>

        <div className="mx-5 w-fit">
          <div className="flex items-center">
            <span className="text-lg xxxs:text-2xl xs:text-3xl">
              Keanu Revees
            </span>
          </div>
          <div className="text-offWhite text-opacity-75  mt-3 w-fit text-sm xx:text-xs xs:text-sm">
            <div className="mt-5">
              <span>Born: September 2, 1964</span>
            </div>

            <div className="mt-2">
              <span>Nationality: Canadian</span>
            </div>

            <div className="mt-2">
              <span>Height: 182cm</span>
            </div>
          </div>

          <div className=" mt-12 w-full  lg:w-[90%] text-[17px] h-[13rem]  overflow-auto hidden semiSm:block">
            <span className=" leading-7">
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

      <div className=" mt-12 mx-5 sm:mx-0 text-sm xxs:text-[17px]   semiSm:hidden">
        <span className=" leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          aliquam nisi pariatur unde quibusdam vitae blanditiis, exercitationem
          impedit explicabo beatae porro. Quo eveniet magnam cupiditate,
          voluptates incidunt dignissimos esse quasi! Aliquam, exercitationem
          unde. Illo natus fuga nam cumque porro deserunt vitae, voluptates
          similique, ex facere assumenda nisi pariatur quas quia?
        </span>
      </div>
    </div>
  );
};

export default ActorInfo;
