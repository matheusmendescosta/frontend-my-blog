'use client';

import DarkMode from '@/components/ui/DarkMode';
import SignUpFromSection from './SignUpFromSection';

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-end p-4">
        <DarkMode>º</DarkMode>
      </div>
      <SignUpFromSection />
    </>
  );
};

export default SignUpPage;
