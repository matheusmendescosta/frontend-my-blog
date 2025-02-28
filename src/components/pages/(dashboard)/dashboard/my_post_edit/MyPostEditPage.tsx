'use client';
import usePost from '../use-post';

type MyPostEditPageProps = {
  postId: string;
};

const MyPostEditPage = ({ postId }: MyPostEditPageProps) => {
  const { post } = usePost({ postId });
  return (
    <div>
      {post?.id} {postId}
    </div>
  );
};

export default MyPostEditPage;
