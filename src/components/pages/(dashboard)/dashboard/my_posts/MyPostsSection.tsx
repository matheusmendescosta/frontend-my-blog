'use client';

import { Badge } from '@/components/ui/badge';
import { UserContext } from '@/providers/UserProvider';
import { useContext } from 'react';

const MyPostsSection = () => {
  const userContext = useContext(UserContext);

  console.log(userContext.user);

  return (
    <div className="space-y-4">
      {userContext.user.posts.map((post, index) => (
        <div key={index} className="rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <h3 className="text-sm font-semibold">{post.slug}</h3>
          <div>
            <Badge>TI</Badge>
          </div>
          <a href={`/dashboard/posts/my_posts/${post.id}/edit`} className="text-blue-500 hover:underline">
            Edit post
          </a>
        </div>
      ))}
    </div>
  );
};

export default MyPostsSection;
