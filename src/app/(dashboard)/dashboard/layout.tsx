import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
  return (
    <DefaultProvider session={session}>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <div className="p-4">{children}</div>
        </main>
      </SidebarProvider>
    </DefaultProvider>
  );
};

export default RequiredLayout;
