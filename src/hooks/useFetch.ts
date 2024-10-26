import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {

  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then(res => res.json())
      .then(t => {
        setResults(t);
        setError(null);
      })
      .then(() => setLoading(false))
      .catch(error => {
        setError(error);
        setLoading(false);
        setResults(null);
      });
  }, [url]);

  return {loading, results, error};
}
