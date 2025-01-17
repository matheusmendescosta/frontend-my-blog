import { DefaultProvider } from "@/providers/DefaultProvider";

const RequiredLayout = async ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: { user: { name: string; email: string }; token: string };
}) => {
  return <DefaultProvider session={session}>{children}</DefaultProvider>;
};

export default RequiredLayout;
