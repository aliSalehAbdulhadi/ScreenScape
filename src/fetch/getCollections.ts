import { useState, useEffect, useCallback } from 'react';

const useGetCollection = (collectionId: string) => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const collectionFetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const collectionRequest = await fetch(
        `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      if (!collectionRequest.ok) {
        throw new Error('Failed to fetch collection data.');
      }
      const collectionResponse = await collectionRequest?.json();
      setCollection(collectionResponse);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [collectionId]);

  useEffect(() => {
    collectionFetch();
  }, [collectionFetch]);

  return [collection, loading, error];
};

export default useGetCollection;
