'use client';
import DarkMode from '@/components/ui/DarkMode';
import SuccessSection from './SuccessSection';

const SuccessPage = () => {
  return (
    <>
      <div className="flex justify-end p-4">
        <DarkMode>º</DarkMode>
      </div>
      <SuccessSection />
    </>
  );
};

export default SuccessPage;
