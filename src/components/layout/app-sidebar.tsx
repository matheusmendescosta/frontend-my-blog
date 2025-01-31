'use client';

import { ChartBarStacked, Home, Tag, UserRound, Users2Icon } from 'lucide-react';

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
import { ThemeContext } from '@/providers/ThemeProvider';

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
    isAdmin: true,
  },
  {
    title: 'Category',
    url: '/dashboard/categories',
    icon: ChartBarStacked,
    isAdmin: true,
  },
  {
    title: 'User',
    url: '/dashboard/users/user/[id]',
    icon: UserRound,
  },
  {
    title: 'Users',
    url: '/dashboard/users',
    icon: Users2Icon,
    isAdmin: true,
  },
];

export function AppSidebar() {
  const userContext = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>my brain</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.isAdmin && userContext.user.role !== 'ADMIN') {
                  return null;
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url.replace('[id]', userContext.user.id)}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto flex items-center space-x-2 p-2">
          <DarkMode />
          {theme.mode == 'dark' ? <span>Dark</span> : <span>Light</span>}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
