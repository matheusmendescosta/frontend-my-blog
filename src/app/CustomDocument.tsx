'use client';

import { ThemeContext } from '@/providers/ThemeDarkLigthProvider';
import React, { useContext } from 'react';
import { twJoin } from 'tailwind-merge';

type CustomDocumentProps = {
  children: React.ReactNode;
};

const CustomDocument = ({ children }: CustomDocumentProps) => {
  const themeContext = useContext(ThemeContext);

  return <html className={twJoin('h-full', themeContext.mode)}>{children}</html>;
};

export default CustomDocument;
