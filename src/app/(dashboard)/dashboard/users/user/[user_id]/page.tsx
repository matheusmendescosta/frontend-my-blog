import { UserPage } from '@/components/pages/(dashboard)/dashboard/user';

const Page = async ({ params }: { params: Promise<{ user_id: string }> }) => {
  return <UserPage userId={(await params).user_id} />;
};

export default Page;
