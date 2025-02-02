'use client';

import { postDto } from '@/dto/postDto';
import { useEffect, useState } from 'react';

export default function usePost({ postId }: { postId: string }) {
  const [post, setPost] = useState<postDto>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fail');
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId, setPost]);

  return { post };
}
