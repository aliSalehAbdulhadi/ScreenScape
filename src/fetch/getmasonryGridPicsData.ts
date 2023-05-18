import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useMasonryGridPicsDataFetch = (
  mediaType: string,
  id: string,
  isOpen: boolean
) => {
  const [pictureResponse, setPictureResponse] = useState<any>({});

  const masonryGridPicsDataFetch = useCallback(async () => {
    try {
      const picturesResponse = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_image_language=en`
      );

      setPictureResponse(picturesResponse?.data);
    } catch (error) {}
  }, [id, mediaType]);

  useEffect(() => {
    if (isOpen) {
      masonryGridPicsDataFetch();
    }
  }, [isOpen, masonryGridPicsDataFetch]);

  return [pictureResponse];
};
