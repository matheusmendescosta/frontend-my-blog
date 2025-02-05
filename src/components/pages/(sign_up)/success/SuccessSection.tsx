import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

export default function SuccessSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md rounded-2xl p-8 text-center shadow-lg sm:dark:bg-gray-600">
        <CheckCircle className="mx-auto h-16 w-16 dark:text-white" />
        <h1 className="mt-4 text-2xl font-semibold dark:text-white">Registration completed successfully!</h1>
        <p className="mt-2 dark:text-white">Check your email for more information about your account.</p>
        <Link
          href="/sign_in"
          className={twJoin(
            'mt-6 inline-block rounded-lg bg-gray-300 px-6 py-2 shadow transition hover:bg-gray-600 dark:bg-gray-500 dark:text-white'
          )}
        >
          Return to login page
        </Link>
      </div>
    </div>
  );
}
