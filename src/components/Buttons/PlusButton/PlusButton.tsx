import { BsPlus } from 'react-icons/bs';

const PlusButton = ({ size }: { size: number }) => {
  return (
    <div className="border-[1px] p-[.2rem] border-white rounded-full text-white cursor-pointer bg-black bg-opacity-30">
      <BsPlus size={size} />
    </div>
  );
};

export default PlusButton;
