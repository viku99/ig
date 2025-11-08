
import { useState, useEffect } from 'react';
import { Content } from '../types';

interface UseContentResult {
  content: Content | null;
  loading: boolean;
  error: Error | null;
}

export function useContent(): UseContentResult {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Using an absolute path to fetch from the public root
        const response = await fetch('/content.json');
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
    }
    fetchData();
  }, []);

  return { content, loading, error };
}
