import { useState, useEffect, useCallback } from 'react';
import { Content } from '../types';

interface UseContentResult {
  content: Content | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useContent(): UseContentResult {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Fix: Changed path from absolute '/content.json' to relative './content.json'
      // to ensure the file is found correctly in all environments.
      const response = await fetch('./content.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Content = await response.json();
      setContent(data);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('An unknown error occurred while fetching content.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { content, loading, error, refetch: fetchData };
}