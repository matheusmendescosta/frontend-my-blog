'use client';
import DarkMode from '@/components/ui/DarkMode';
import { SignInForm } from './SignInForm';

const SignInPage = () => {
  return (
    <>
      <div className="flex justify-end p-4">
        <DarkMode />
      </div>
      <SignInForm />
    </>
  );
};

export default SignInPage;
