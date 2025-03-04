'use client';
import MyPostEditForm from './MyPostEditForm';

type MyPostEditPageProps = {
  postId: string;
};

const MyPostEditPage = ({ postId }: MyPostEditPageProps) => {
  return <MyPostEditForm postId={postId} />;
};

export default MyPostEditPage;
