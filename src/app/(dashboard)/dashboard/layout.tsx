import { DefaultProvider } from "@/providers/DefaultProvider";

export const RequiredLayout = async ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: {
    user: { id: string; name: string; email: string; role: string };
    token: string;
    expires: string;
  };
}) => {
  return <DefaultProvider session={session}>{children}</DefaultProvider>;
};

export default RequiredLayout;
