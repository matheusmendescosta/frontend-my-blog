'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useUsers } from './use-users';

const UserListSection = () => {
  const { users } = useUsers();

  return (
    <Table>
      <TableCaption>List of users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>email</TableHead>
          <TableHead>role</TableHead>
          <TableHead className="text-right">action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users[0]?.users.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell className="text-right">Delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserListSection;
