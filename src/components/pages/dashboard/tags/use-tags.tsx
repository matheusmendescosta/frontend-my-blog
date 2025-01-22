'use client';

import { tagDto } from '@/dto/tagDto';
import { useCallback, useEffect, useState } from 'react';

export const useTags = () => {
  const [tags, setTags] = useState<tagDto[]>([]);

  const loadPosts = useCallback(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tags`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fetch fail');
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.tags)) {
          setTags(data.tags);
        } else {
          console.error('Invalid response format:', data);
          setTags([]);
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return { tags, setTags };
};
