import { ReactNode } from 'react';

const GridComp = ({
  children,
  title,
  changeableTitle = '',
  className = '',
}: {
  children: ReactNode;
  title: string;
  className?: String;
  changeableTitle?: string;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        <span className="text-lg xxs:text-xl text-secondary self-center xxs:self-start">
          {title}
        </span>
        {changeableTitle ? (
          <div className=" flex items-center text-lg xxs:text-xl self-center xxs:self-start">
            <span className=" text-secondary mr-1">:</span>
            <span className="text-offWhite ">{changeableTitle}</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="mt-5 grid grid-cols-fluid gap-2 place-items-center semiSm:place-items-start ">
        {children}
      </div>
    </div>
  );
};

export default GridComp;
