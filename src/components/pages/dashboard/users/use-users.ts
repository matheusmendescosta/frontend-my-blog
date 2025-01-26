'use client';

import { usersDto } from '@/dto/usersDto';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

export const useUsers = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState<usersDto[]>([]);

  const loadUsers = useCallback(() => {
    if (!session || !session.user) {
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, {
      headers: {
        Authorization: `Bearer ${session.user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fetch fail');
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error('Invalid response format:', data);
          setUsers([]);
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, setUsers };
};
