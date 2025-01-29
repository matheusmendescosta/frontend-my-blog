type UserRole = 'READER' | 'ADMIN' | 'AUTHOR';

export interface Users {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface UsersDto {
  hasMore: boolean;
  offset: number;
  limit: number;
  totalCount: number;
  users: Users[];
}
