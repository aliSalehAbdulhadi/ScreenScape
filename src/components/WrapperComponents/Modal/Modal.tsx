import React, { ReactNode, memo, useEffect, useRef, useState } from 'react';
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
  onClose,
  closeIcon,
}: {
  children: ReactNode;
  animationCloseTime: number;
  width: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any[];
  onClose?: Function;
  closeIcon?: ReactNode;
}) => {
  const [animation, setAnimation] = useState(false);

  const closeRef = useClickOutside(() => {
    closeModalHandler();
  });

  const scrollToTopRef = useRef<HTMLDivElement>(null);

  const closeModalHandler = () => {
    if (open) {
      setTimeout(() => {
        setAnimation(true);
      }, animationCloseTime);
      setTimeout(() => {
        setOpen(false);
        setAnimation(false);
        scrollToTopRef?.current?.scrollTo(0, 0);
        onClose && onClose();
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
        ref={closeRef}
        className="relative flex flex-col items-center rounded-t-md  bg-primary bg-opacity-90  mt-[50px] semiSm:mt-0 h-[95vh] semiSm:h-[98vh]"
      >
        <div className="w-full flex items-center justify-between  my-2 z-[2]">
          <div className={`ml-5 ${data || 'invisible'}`}>
            <span className="text-secondary mr-1">{data?.length}</span>
            <span>Matches</span>
          </div>
          <div
            onClick={closeModalHandler}
            className="mr-4 cursor-pointer h-7 xxxs:h-10 w-7 xxxs:w-10 hover:text-red-400 transition-all"
          >
            {closeIcon || <RiCloseCircleFill className=" w-full h-full" />}
          </div>
        </div>
        <div
          ref={scrollToTopRef}
          className="h-[93vh] semiSm:h-[100vh] w-full sm:w-auto overflow-y-scroll overflow-x-hidden scrollBar z-[2] semiSm:px-5 modal-content"
          style={{
            width: `${screenWidth > 860 ? width : 100}vw`,
          }}
        >
          {children}
        </div>

        <div className="h-full w-full bg-white bg-opacity-10 absolute rounded-t-md " />
      </div>
    </div>
  );
};

export default memo(Modal);
