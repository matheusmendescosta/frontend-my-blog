'use client';

import { UsersDto } from '@/dto/usersDto';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

export const useUsers = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState<UsersDto>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(() => {
    if (!session || !session.user) {
      return;
    }
    setIsLoading(true);
    setError(null);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${session.user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.status}`);
        }
        return response.json();
      })
      .then((data: UsersDto) => {
        setUsers(data);
      })
      .catch((error: Error) => {
        console.error('Error fetching users:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [session]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, isLoading, error, setUsers };
};
