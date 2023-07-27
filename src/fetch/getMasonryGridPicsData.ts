import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useMasonryGridPicsDataFetch = (
  mediaType: string,
  id: string,
  isOpen: boolean
) => {
  const [pictureResponse, setPictureResponse] = useState<any>({});
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const masonryGridPicsDataFetch = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

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

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [isOpen, masonryGridPicsDataFetch]);

  return [pictureResponse];
};
