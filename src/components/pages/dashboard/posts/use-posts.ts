'use client';

import { postsDto } from '@/dto/PostsDto';
import { useCallback, useEffect, useState } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState<postsDto>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fetch fail');
        }
        return response.json();
      })
      .then((data: postsDto) => {
        setPosts(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return { posts, setPosts, isLoading, error };
};
