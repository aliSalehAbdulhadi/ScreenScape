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
    <div className="sm:hidden">
      <div className="flex items-center ">
        <span className=" text-secondary ml-2 xxxs:ml-5">Related</span>
        <div className="ml-3">
          <ViewMoreComp titles={relatedTitles} mediaType={mediaType} />
        </div>
      </div>

      <CardSlider mediaType={mediaType} isCast={false} data={relatedTitles} />
    </div>
  );
};

export default SmallScreenContent;
