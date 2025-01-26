export type usersDto = {
  totalCount: number;
  offset: number;
  limit: number;
  users: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    role: string;
  }[];
};
