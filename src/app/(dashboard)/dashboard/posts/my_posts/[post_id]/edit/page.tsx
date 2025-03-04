import MyPostEditPage from '@/components/pages/(dashboard)/dashboard/my_post_edit/MyPostEditPage';
import React from 'react';

const Page = async ({ params }: { params: Promise<{ post_id: string }> }) => {
  return <MyPostEditPage postId={(await params).post_id} />;
};

export default Page;
