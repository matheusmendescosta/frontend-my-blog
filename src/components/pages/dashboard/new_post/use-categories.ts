'use client';

import { categoriesDto } from '@/dto/categories';
import { useCallback, useEffect, useState } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState<categoriesDto>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCategories = useCallback(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fetch fail');
        }
        return response.json();
      })
      .then((data: categoriesDto) => {
        setCategories(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return { categories, setCategories, isLoading, error };
};
