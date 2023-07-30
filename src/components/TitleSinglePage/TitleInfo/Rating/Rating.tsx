import { v4 as uuidv4 } from 'uuid';
import { dataObject } from '@/src/global/globalVariables';

const Rating = ({ data, mediaType }: { data: any; mediaType: string }) => {
  return (
    <div className="flex flex-col justify-center self-end ">
      {dataObject(data, mediaType)?.ratings?.map((rating: any) => (
        <div key={uuidv4()} className="mb-1">
          <span className="mr-1">
            {rating?.Value?.replaceAll('%', '')?.split('/')[0]}
          </span>
          <span>
            {rating?.Source === 'Internet Movie Database'
              ? 'IMDb'
              : rating?.Source}
          </span>
        </div>
      ))}

      <div>
        <span className="mr-1">
          {dataObject(data, mediaType)?.voteAverage &&
            Math.floor(Number(dataObject(data, mediaType)?.voteAverage * 10))}
        </span>
        <span>Community</span>
      </div>
    </div>
  );
};

export default Rating;
