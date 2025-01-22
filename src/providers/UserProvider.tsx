import { userDto } from '@/dto/userDto';
import React, { Dispatch, SetStateAction, useState } from 'react';

export type UserContextType = {
  user: userDto;
  setUser: Dispatch<SetStateAction<userDto>>;
};

export const UserContext = React.createContext<UserContextType>({
  setUser: () => undefined,
  user: {} as userDto,
});

type UserProviderProps = {
  children: React.ReactNode;
  user: userDto;
};

export const UserProvider = ({ children, user: userToSet }: UserProviderProps) => {
  const [user, setUser] = useState<userDto>(userToSet);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
