import CardSlider from '@/src/components/Sliders/CardSlider/CardSlider';
import ViewMoreComp from '@/src/components/ViewMoreComp/ViewMoreComp';

const SmallScreenContent = ({
  relatedTitles,
  mediaType,
}: {
  relatedTitles: any[];
  mediaType: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <span className=" text-secondary ml-2 xs:ml-5">Related</span>
        {relatedTitles?.length > 10 ? (
          <div className="mr-2 xs:mr-5">
            <ViewMoreComp titles={relatedTitles} mediaType={mediaType} />
          </div>
        ) : null}
      </div>

      <CardSlider mediaType={mediaType} isCast={false} data={relatedTitles} />
    </div>
  );
};

export default SmallScreenContent;
