'use client';

import { useEffect, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { useSignUp } from './use-sign-up';
import { Progress } from '@/components/ui/progress';

export default function SignUpFromSection() {
  const { handleSubmit, register, isSubmitting } = useSignUp();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isSubmitting) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 300);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }
  }, [isSubmitting]);

  return (
    <div>
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-3/4">
            <Progress value={progress} />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">Register</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-200">Create an account to share a little about your experiences.</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-4 mt-16 max-w-xl sm:mt-20 lg:mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-200">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                type="text"
                autoComplete="name"
                className={twJoin(
                  'block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300',
                  'dark:bg-gray-900 dark:text-white'
                )}
                {...register('name')}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-200">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={twJoin(
                  'block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300',
                  'dark:bg-gray-900 dark:text-white'
                )}
                {...register('email')}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 dark:text-gray-200">
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                className={twJoin(
                  'block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300',
                  'dark:bg-gray-900 dark:text-white'
                )}
                {...register('password')}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="submit"
            className={twJoin(
              'block w-full rounded-md bg-slate-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-600'
            )}
          >
            Let&#39;s share knowledge
          </button>
          <a
            href="/sign_in"
            className={twJoin(
              'block w-full rounded-md bg-slate-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-600'
            )}
          >
            Already have an account? Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
