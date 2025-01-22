import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DefaultProvider } from '@/providers/DefaultProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const RequiredLayout = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      token: string;
    };
    token: string;
    expires: string;
  };
}) => {
  return (
    <DefaultProvider session={session}>
      <div className="h-screen w-screen">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <div className="w-4/5 border p-4">
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </div>
        </SidebarProvider>
      </div>
    </DefaultProvider>
  );
};

export default RequiredLayout;
