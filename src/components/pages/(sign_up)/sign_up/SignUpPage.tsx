'use client';

import DarkMode from '@/components/ui/dark-mode';
import SignUpFromSection from './SignUpFromSection';

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-end p-4">
        <DarkMode />
      </div>
      <SignUpFromSection />
    </>
  );
};

export default SignUpPage;
