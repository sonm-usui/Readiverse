import { useState, useEffect } from 'react';

export const useFetch = (url: any) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error as null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return [data, isLoading, error];
}

