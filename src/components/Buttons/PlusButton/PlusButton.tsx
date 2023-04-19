import { BsPlus } from 'react-icons/bs';

const PlusButton = ({ size }: { size: number }) => {
  return (
    <div className="border-[2px] w-fit border-white border-opacity-60 hover:border-opacity-90 transition-all p-[.2rem]  rounded-full text-white cursor-pointer bg-black bg-opacity-30">
      <BsPlus size={size} />
    </div>
  );
};

export default PlusButton;
