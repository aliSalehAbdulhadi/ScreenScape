import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useMasonryGridPicsDataFetch = (
  mediaType: string,
  id: number,
  isOpen: boolean
): [any, boolean, string | null] => {
  const [pictureResponse, setPictureResponse] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const masonryGridPicsDataFetch = useCallback(async () => {
    setLoading(true);
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;

    try {
      const picturesResponse = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_image_language=en`
      );

      setPictureResponse(picturesResponse?.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch pictures data');
    } finally {
      setLoading(false);
    }
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

  return [pictureResponse, loading, error];
};
