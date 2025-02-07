'use client';

import { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useUsers } from './use-users';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUpdatePermissionUser } from './use-update-permission';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Roles = [
  { label: 'ADMIN', value: 'ADMIN' },
  { label: 'READER', value: 'READER' },
  { label: 'AUTHOR', value: 'AUTHOR' },
];

const UserListSection = () => {
  const [selectedRoles, setSelectedRoles] = useState<Record<string, string>>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingUserId, setPendingUserId] = useState<string | null>(null);
  const [pendingRole, setPendingRole] = useState<string | null>(null);

  const { users } = useUsers();
  const { setValue, handleSubmit } = useUpdatePermissionUser({ userId: pendingUserId || '' });

  const handleRoleSelect = (userId: string, newRole: string) => {
    setPendingUserId(userId);
    setPendingRole(newRole);
    setDialogOpen(true);
  };

  const handleConfirmChange = () => {
    if (pendingUserId && pendingRole) {
      setValue('role', pendingRole);
      handleSubmit();
      setSelectedRoles((prev) => ({ ...prev, [pendingUserId]: pendingRole }));
    }
    setDialogOpen(false);
  };

  const handleCancel = () => {
    setPendingUserId(null);
    setPendingRole(null);
    setDialogOpen(false);
  };

  return (
    <>
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.users &&
            users.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Select value={selectedRoles[user.id] ?? user.role} onValueChange={(value) => handleRoleSelect(user.id, value)}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder={selectedRoles[user.id] ?? user.role} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        {Roles.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">Delete</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Role Change</DialogTitle>
            <DialogDescription>
              Are you sure you want to change this users role to <strong>{pendingRole}</strong>?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="destructive" onClick={handleConfirmChange}>
              Save changes
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserListSection;
