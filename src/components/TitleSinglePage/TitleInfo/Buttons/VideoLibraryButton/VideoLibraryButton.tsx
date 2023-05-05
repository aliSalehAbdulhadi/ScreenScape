import React, { useState } from 'react';
import { MdVideoLibrary } from 'react-icons/md';
import VideoPlayer from '@/src/components/VideoPlayer/VideoPlayer';
import DelayDisplay from '@/src/components/WrapperComponents/DelayDisplay/DelayDisplay';
import GridComp from '@/src/components/WrapperComponents/GridComp/GridComp';
import LazyLoading from '@/src/components/WrapperComponents/LazyLoading/LazyLoading';
import Modal from '@/src/components/WrapperComponents/Modal/Modal';

const VideoLibraryButton = ({ videos }: { videos: any[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [slidersInView, setSlidersInView] = useState<number>(20);

  return (
    <div className="">
      <button disabled={videos?.length < 1} onClick={() => setOpen(true)}>
        <MdVideoLibrary
          size={30}
          className={`mr-3 transition-all  ${
            videos?.length < 1
              ? 'cursor-default opacity-50'
              : ' cursor-pointer hover:opacity-80'
          }`}
        />
      </button>
      <Modal
        data={videos}
        width={80}
        animationCloseTime={190}
        open={open}
        setOpen={setOpen}
      >
        <GridComp center={true} breakPointWidth={28}>
          {videos?.map(
            (video: any, i: number) =>
              slidersInView >= i && (
                <LazyLoading
                  setSlidersInView={setSlidersInView}
                  slidersInView={slidersInView}
                  perView={20}
                  index={i}
                  key={video?.id}
                >
                  <DelayDisplay delay={i * 50}>
                    <div className="w-[15rem] xxxs:w-[21rem] xs:w-[28rem] sm:w-[30rem] overflow-hidden  rounded mb-10">
                      <VideoPlayer
                        videoId={video?.key}
                        controls={true}
                        stopVideo={open === false}
                      />
                      <div className="ml-1 mt-2">{video?.name}</div>
                    </div>
                  </DelayDisplay>
                </LazyLoading>
              )
          )}
        </GridComp>
      </Modal>
    </div>
  );
};

export default VideoLibraryButton;
