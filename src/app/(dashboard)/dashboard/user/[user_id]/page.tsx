import { UserPage } from "@/components/pages/dashboard/user";

const page = ({ params }: { params: { user_id: string } }) => {
  return <UserPage userId={params.user_id} />;
};

export default page;
