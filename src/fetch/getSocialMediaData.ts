import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useSocialMediaIds = (mediaType: string, id: number) => {
  const [socialMediaIds, setSocialMediaIds] = useState<any>({});
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const hoverDataFetch = useCallback(async () => {
    const source = axios.CancelToken.source();
    cancelTokenRef.current = source;
    try {
      const socialMediaResponse = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      setSocialMediaIds(socialMediaResponse?.data);
    } catch (error) {}
  }, [id, mediaType]);

  useEffect(() => {
    hoverDataFetch();

    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Request canceled by cleanup');
        cancelTokenRef.current = null;
      }
    };
  }, [hoverDataFetch]);

  return [socialMediaIds];
};
