import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DefaultProvider } from "@/providers/DefaultProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const RequiredLayout = ({
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
      <div className="w-screen h-screen">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <div className="p-4 border w-4/5">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </SidebarProvider>
      </div>
    </DefaultProvider>
  );
};

export default RequiredLayout;
