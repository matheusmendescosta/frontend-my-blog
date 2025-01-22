'use client';

import { ChartBarStacked, Home, Tag, UserRound } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useSession } from 'next-auth/react';

const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Tags',
    url: '/dashboard/tags',
    icon: Tag,
  },
  {
    title: 'Category',
    url: '/dashboard/categories',
    icon: ChartBarStacked,
  },
  {
    title: 'User',
    url: '/dashboard/user/[id]',
    icon: UserRound,
  },
];

export function AppSidebar() {
  const { data: session } = useSession();
  const userId = session?.user?.id || 'defaultId';

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>my brain</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url.replace('[id]', userId)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
