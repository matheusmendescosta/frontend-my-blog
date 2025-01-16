import { DefaultProvider } from "@/providers/DefaultProvider";

const RequiredLayout = async ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return <DefaultProvider session={session}>{children}</DefaultProvider>;
};

export default RequiredLayout;
