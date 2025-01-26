'use client';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useUsers } from './use-users';

const UserListSection = () => {
  const { users } = useUsers();
//   console.log(users);
  return (
    <Table>
      <TableCaption>A list of your recent tags.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead className="text-right">action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            {/* <TableCell>{user.users}</TableCell>
            <TableCell>{user.slug}</TableCell> */}
            <TableCell className="text-right">Delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserListSection;
