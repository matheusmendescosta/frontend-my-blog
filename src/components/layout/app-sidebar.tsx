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
import { UserContext } from '@/providers/UserProvider';
import { useContext } from 'react';
import DarkMode from '../ui/DarkMode';

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
  const userContext = useContext(UserContext);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>my brain</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="flex items-center py-4 pl-1">
                <DarkMode />
                <span className="pl-1">Theme</span>
              </div>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url.replace('[id]', userContext.user.id)}>
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
