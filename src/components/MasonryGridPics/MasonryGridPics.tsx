import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { IoGrid } from 'react-icons/io5';
import Masonry from 'react-masonry-css';
import { shuffleArray } from '@/src/helper/shuffleArray';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import SinglePicture from '../SinglePicture/SinglePicture';
import useClickOutside from '@/src/hooks/useClickOutside';
import Modal from '../WrapperComponents/Modal/Modal';

import 'react-masonry-css';
import LazyLoad from '../WrapperComponents/LazyLoad/LazyLoad';

const PicturesComponent = ({
  children,
  id,
  mediaType,
}: {
  children: ReactNode;
  id: string;
  mediaType: string;
}) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleVisible = useRef(() => {
    setVisibleCount((count) => count + 2);
  });

  const ref = useClickOutside(() => {
    setOpen(false);
  });

  const asyncFunction = useCallback(async () => {
    try {
      if (open) {
        const picturesRequest = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_image_language=en`
        );
        const picturesResponse = await picturesRequest.json();

        const posters = picturesResponse?.posters || [];
        const backdrops = picturesResponse?.backdrops || [];
        const combinedArray = shuffleArray([...posters, ...backdrops]);
        setData(
          mediaType === 'person' ? picturesResponse?.profiles : combinedArray
        );
      }
    } catch (error) {}
  }, [id, mediaType, open]);

  useEffect(() => {
    asyncFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, id]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [open]);
  return (
    <div ref={ref}>
      <div className="xs:rounded self-center  mb-5 sm:mb-0 h-full  w-full  relative">
        {children}
        <div
          onClick={() => setOpen(true)}
          className="bg-white p-3 transition-all rounded-full opacity-70  absolute bottom-3 left-[50%] translate-x-[-50%] cursor-pointer hover:opacity-90"
        >
          <IoGrid className="h-[24px] w-[24px] text-primary" />
        </div>
      </div>

      <Modal
        data={data}
        width={80}
        animationCloseTime={190}
        open={open}
        setOpen={setOpen}
      >
        <Masonry
          breakpointCols={{
            default: 5,
            1200: 4,
            800: 3,
            600: 2,
            300: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {data?.slice(0, visibleCount).map((img, i) => (
            <LazyLoad key={i} threshold={0.8} onVisible={handleVisible.current}>
              <DelayDisplay delay={i * 50}>
                <SinglePicture
                  height={img?.height}
                  width={img?.width}
                  imageUrl={img?.file_path}
                />
              </DelayDisplay>
            </LazyLoad>
          ))}
        </Masonry>
      </Modal>
    </div>
  );
};

export default PicturesComponent;

{
  /* <div
onClick={() => setOpen(true)}
className="bg-primary p-3 transition-all rounded-full opacity-70  absolute bottom-3 left-3 cursor-pointer hover:opacity-90"
>
<IoGrid className="h-7 w-7" />
</div> */
}
