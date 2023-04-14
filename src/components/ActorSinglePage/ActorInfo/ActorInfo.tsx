import Image from 'next/image';

const ActorInfo = () => {
  return (
    <div className="flex  justify-center h-[30rem]  w-full ">
      <div className=" rounded ">
        <Image
          width={1280}
          height={1400}
          src="/images/licensed-image.jpeg"
          alt="Actor Photo"
          className="rounded h-full"
        />
      </div>

      <div className="ml-5 ">
        <div className="flex items-center">
          <span className="text-3xl w-[80%] ">Keanu Revees</span>
        </div>
        <div className="text-offWhite text-opacity-75  mt-3 w-fit">
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

        <div className="w-[60%] mt-12">
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

export default ActorInfo;
