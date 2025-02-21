'use client';
import DarkMode from '@/components/ui/dark-mode';
import SuccessSection from './SuccessSection';

const SuccessPage = () => {
  return (
    <>
      <div className="flex justify-end p-4">
        <DarkMode />
      </div>
      <SuccessSection />
    </>
  );
};

export default SuccessPage;
