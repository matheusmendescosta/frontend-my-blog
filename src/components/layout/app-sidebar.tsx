'use client';

import { BookDashed, ChartBarStacked, ChevronUp, Home, LogOut, Settings, Tag, User2, UserRound } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ThemeContext } from '@/providers/ThemeProvider';
import { UserContext } from '@/providers/UserProvider';
import { signOut } from 'next-auth/react';
import { useContext } from 'react';
import DarkMode from '../ui/dark-mode';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
    isAdmin: true,
  },
  {
    title: 'Posts',
    url: '/dashboard/posts',
    icon: BookDashed,
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
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Settings /> Setting
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <DarkMode>{theme.mode == 'dark' ? <span>Light</span> : <span>Dark</span>}</DarkMode>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {userContext.user.role === 'ADMIN' && (
                    <a href="/dashboard/users">
                      <span className="flex items-center space-x-2">
                        <User2 />
                        <p>Users</p>
                      </span>
                    </a>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <span className="flex cursor-pointer items-center space-x-2">
                    <LogOut />
                    <p>Sign out</p>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
