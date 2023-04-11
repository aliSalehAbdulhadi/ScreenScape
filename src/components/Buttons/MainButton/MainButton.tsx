const MainButton = ({ children }: { children: any }) => {
  return (
    <button className=" text-black z-10  border-[1px] rounded bg-white  py-2 hover:opacity-90 transition-all">
      <span className="mx-4 flex items-center justify-center">{children}</span>
    </button>
  );
};

export default MainButton;
