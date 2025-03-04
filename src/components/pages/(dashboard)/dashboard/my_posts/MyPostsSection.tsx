'use client';

import { Badge } from '@/components/ui/badge';
import { UserContext } from '@/providers/UserProvider';
import { MoveUpRight } from 'lucide-react';
import { useContext } from 'react';

const MyPostsSection = () => {
  const userContext = useContext(UserContext);

  console.log(userContext.user);

  return (
    <div className="space-y-4">
      {userContext.user.posts.map((post, index) => (
        <div key={index} className="flex justify-between rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md">
          <div>
            <a href={`/dashboard/posts/${post.id}`} className="flex">
              <h2 className="mr-2 text-xl font-semibold">{post.title}</h2>
              <MoveUpRight />
            </a>
            <h3 className="text-sm font-semibold">{post.slug}</h3>
            <div className="mt-2">
              <Badge>{post.status}</Badge>
            </div>
          </div>
          <div>
            <a href={`/dashboard/posts/my_posts/${post.id}/edit`} className="text-blue-500 hover:underline">
              Edit post
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostsSection;
