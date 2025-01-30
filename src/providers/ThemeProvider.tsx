'use client';

import { createContext, useEffect, useState } from 'react';

export type ThemeContextType = {
  mode: 'light' | 'dark' | (string & {});
  toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark' | (string & {})>('light');

  const toggleMode = () => {
    const theme = mode === 'light' ? 'dark' : 'light';
    setMode(theme);
    localStorage.setItem('theme', theme);
    //TODO: quick fix do kaway404
    if (document.location.pathname === '/dashboard/posts/post/new') document.location.reload();
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    setMode(theme ?? 'light');
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>;
}
