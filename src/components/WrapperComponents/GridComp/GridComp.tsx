import { ReactNode } from 'react';

const GridComp = ({
  children,
  title,
  changeableTitle = '',
  className = '',
  breakPointWidth,
  center = false,
}: {
  children: ReactNode;
  title?: string;
  className?: String;
  changeableTitle?: string;
  center?: boolean;
  breakPointWidth: number;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col xs:flex-row xs:items-center">
        <span className="text-sm xs:text-xl text-secondary xs:self-center xxs:self-start">
          {title}
        </span>
        <div
          className={`flex items-center text-lg xxs:text-xl xs:self-center xxs:self-start ${
            changeableTitle ? '' : 'invisible'
          }`}
        >
          <span className=" text-secondary mr-1 hidden xs:block">:</span>
          <span className="text-offWhite ">{changeableTitle}</span>
        </div>
      </div>
      <div
        className={`mt-5 grid gap-2 place-items-center justify-center  ${
          center ? '' : 'semiSm:justify-start sm:ml-[26px]'
        }`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${String(
            breakPointWidth
          )}rem, min-content))`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GridComp;
