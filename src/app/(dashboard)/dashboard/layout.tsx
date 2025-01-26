import { authOptions } from '@/auth/auth-options';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DefaultProvider } from '@/providers/DefaultProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { getServerSession, Session } from 'next-auth';

const getCurrentUser = async (session: Session | null) => {
  if (!session) {
    return null;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${session.user.id}`, {
    headers: {
      Authorization: `Bearer ${session.user.token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  const user = await response.json();
  return user;
};

export const RequiredLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  const currentUser = await getCurrentUser(session);

  console.log(currentUser)

  return (
    <DefaultProvider user={currentUser}>
      <div className="h-screen w-screen">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <div className="w-4/5 border p-4">
            <ThemeProvider>{children}</ThemeProvider>
          </div>
        </SidebarProvider>
      </div>
    </DefaultProvider>
  );
};

export default RequiredLayout;
