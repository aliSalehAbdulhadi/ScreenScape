import React, { ReactNode, useEffect, useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import useClickOutside from '@/src/hooks/useClickOutside';
import useWindowSize from '@/src/hooks/useWindowsSize';

const Modal = ({
  children,
  animationCloseTime,
  width,
  open,
  setOpen,
  data,
}: {
  children: ReactNode;
  animationCloseTime: number;
  width: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any[];
}) => {
  const [animation, setAnimation] = useState(false);

  const ref = useClickOutside(() => {
    closeModalHandler();
  });

  const closeModalHandler = () => {
    if (open) {
      setTimeout(() => {
        setAnimation(true);
      }, animationCloseTime);
      setTimeout(() => {
        setOpen(false);
        setAnimation(false);
      }, animationCloseTime + 190);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [open]);

  const screenWidth = useWindowSize();

  return (
    <div
      className={`fixed inset-0 left-0 top-0 semiSm:top-[19px] m-auto h-screen w-screen z-[10] bg-blur flex items-center justify-center fade-in modal-enter ${
        open || 'hidden'
      } ${animation && 'fade-out modal-exit'}`}
    >
      <div
        ref={ref}
        className="h-screen semiSm:h-[98vh] w-full sm:w-auto bg-primary bg-opacity-90 overflow-y-auto overflow-x-hidden  rounded-t-md px-5 sm:px-10 py-5 scrollBar z-[2]"
        style={{ width: `${screenWidth > 600 ? width : 100}vw` }}
      >
        <div>
          <div className="w-full flex items-center justify-between mx-1 mb-2">
            <div>
              <span className="text-secondary mr-1">{data?.length}</span>
              <span>Matches</span>
            </div>
            <div className="">
              <RiCloseCircleFill
                onClick={closeModalHandler}
                className=" h-7 xxxs:h-10 w-7 xxxs:w-10 mr-1 cursor-pointer hover:text-red-400 transition-all"
              />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div
        className="absolute h-screen semiSm:h-[98vh] bg-white bg-opacity-40 overflow-hidden  rounded-t-md px-10 py-5 scrollBar z-[1]"
        style={{ width: `${width}vw` }}
      />
    </div>
  );
};

export default Modal;
