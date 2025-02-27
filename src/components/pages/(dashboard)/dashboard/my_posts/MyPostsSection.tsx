'use client';

import { UserContext } from '@/providers/UserProvider';
import { useContext } from 'react';

const MyPostsSection = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      {userContext.user.posts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
    </div>
  );
};

export default MyPostsSection;
