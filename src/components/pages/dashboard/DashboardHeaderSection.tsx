'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/providers/UserProvider';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

const DashboardHeaderSection = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="w-auto rounded-sm border p-6 shadow-md">
      <h1 className="py-2 text-4xl font-bold">Welcome to my brain administrator</h1>
      <div className="pt-6">
        <div>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Hello {userContext.user.name} Open your mind!</AlertTitle>
            <AlertDescription>Tracks post metrics such as likes, comments and views</AlertDescription>
          </Alert>
        </div>
        <div className="flex space-x-2 pt-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/posts/post/new">Create new post</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/categories/new">Create new category</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/tags/new">Create new tag</Link>
          </Button>
          <div className="flex w-full justify-end space-x-2">
            <Button variant="outline">see my posts</Button>
            <Button variant="outline">see my comments</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeaderSection;
