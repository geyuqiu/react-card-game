import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {

  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then(res => res.json())
      .then(t => {
        setResult(t);
        setError(null);
      })
      .then(() => setLoading(false))
      .catch(error => {
        setError(error);
        setResult(null);
      });
  }, [url]);

  return {loading, result, error};
}
