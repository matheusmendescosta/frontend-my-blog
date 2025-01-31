import NewPostPage from '@/components/pages/dashboard/new_post/NewPostPage';

const Page = async ({ params }: { params: Promise<{ user_id: string }> }) => {
  return <NewPostPage userId={(await params).user_id} />;
};

export default Page;
