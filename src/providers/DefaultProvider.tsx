'use client';

import { userDto } from '@/dto/userDto';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from './UserProvider';

type DefaultProviderProps = {
  children: React.ReactNode;
  user: userDto;
};

export const DefaultProvider = ({ children, user }: DefaultProviderProps) => {
  return (
    <SessionProvider>
      <UserProvider user={user}>{children}</UserProvider>
    </SessionProvider>
  );
};
