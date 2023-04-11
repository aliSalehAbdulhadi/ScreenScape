import { BsPlus } from 'react-icons/bs';

const PlusButton = () => {
  return (
    <div className="border-[1px] p-[.2rem] border-white rounded-full text-white cursor-pointer bg-black bg-opacity-30">
      <BsPlus size={30} />
    </div>
  );
};

export default PlusButton;
