import { ThemeContext } from '@/providers/ThemeProvider';
import { MoonIcon, SunMedium } from 'lucide-react';
import { ReactNode, useContext } from 'react';

type DarkModeProps = {
  children?: ReactNode;
};

const DarkMode = ({ children }: DarkModeProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <button onClick={themeContext.toggleMode} className='flex space-x-2 items-center'>
      {themeContext.mode === 'dark' ? <SunMedium /> : <MoonIcon />}
      {children}
    </button>
  );
};

export default DarkMode;
