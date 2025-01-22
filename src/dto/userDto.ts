export type userDto = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'READER' | 'AUTHOR';
  createdAt: string;
  updatedAt: string;
};
