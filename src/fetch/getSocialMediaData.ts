import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useSocialMediaIds = (mediaType: string, id: string) => {
  const [socialMediaIds, setSocialMediaIds] = useState<any>({});

  const hoverDataFetch = useCallback(async () => {
    try {
      const socialMediaResponse = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/external_ids?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      setSocialMediaIds(socialMediaResponse?.data);
    } catch (error) {}
  }, [id, mediaType]);

  useEffect(() => {
    hoverDataFetch();
  }, [hoverDataFetch]);

  return [socialMediaIds];
};
