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
    <div className="">
      <h1 className="py-2 text-4xl font-bold">Welcome to my brain administrator</h1>

      <div className="py-4">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Hello {userContext.user.name} Open your mind!</AlertTitle>
          <AlertDescription>Tracks post metrics such as likes, comments and views</AlertDescription>
        </Alert>
      </div>

      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {userContext.user.role === 'ADMIN' && (
          <>
            <Button variant="outline" asChild>
              <Link href={`/dashboard/posts/post/${userContext.user.id}/new`}>Create new post</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/categories/new">Create new category</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/tags/new">Create new tag</Link>
            </Button>
          </>
        )}
        <Button variant="outline" asChild>
          <Link href="/dashboard/posts">see my posts</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeaderSection;
