const MainButton = ({
  children,
  className = '',
}: {
  children: any;
  className?: string;
}) => {
  return (
    <button
      className={` text-black   border-[1px] rounded bg-white  py-2 hover:opacity-90 transition-all ${className}`}
    >
      <span className="mx-4 flex items-center justify-center">{children}</span>
    </button>
  );
};

export default MainButton;
