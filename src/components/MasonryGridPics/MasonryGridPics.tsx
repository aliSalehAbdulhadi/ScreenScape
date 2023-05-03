import { ReactNode, useCallback, useEffect, useState } from 'react';
import { TfiViewGrid } from 'react-icons/tfi';
import { IoGrid } from 'react-icons/io5';
import Masonry from 'react-masonry-css';
import { shuffleArray } from '@/src/helper/shuffleArray';
import DelayDisplay from '../WrapperComponents/DelayDisplay/DelayDisplay';
import LazyLoading from '../WrapperComponents/LazyLoading/LazyLoading';
import SinglePicture from '../SinglePicture/SinglePicture';
import useClickOutside from '@/src/hooks/useClickOutside';
import Modal from '../WrapperComponents/Modal/Modal';

import 'react-masonry-css';

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
  const [slidersInView, setSlidersInView] = useState<number>(20);

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
      <div className="rounded self-center sm:self-start mb-5 sm:mb-0 h-full  z-[2] w-full xs:w-[28rem]  sm:w-[20rem] relative">
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
          {data?.map(
            (img, i) =>
              slidersInView >= i && (
                <LazyLoading
                  perView={20}
                  key={img?.file_path}
                  index={i}
                  setSlidersInView={setSlidersInView}
                  slidersInView={slidersInView}
                >
                  <DelayDisplay delay={i * 50}>
                    <SinglePicture
                      height={img?.height}
                      width={img?.width}
                      imageUrl={img?.file_path}
                    />
                  </DelayDisplay>
                </LazyLoading>
              )
          )}
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
