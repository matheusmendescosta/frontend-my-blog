'use client';

import { Turnstile } from '@marsidev/react-turnstile';
import Image from 'next/image';
import { twJoin } from 'tailwind-merge';
import { useSignIn } from './use-sign-in';

export const SignInForm = () => {
  const { handleSubmit, register, isSubmitting, errors, setCaptchaToken } = useSignIn();

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-12 sm:rounded-lg sm:px-12 sm:shadow-2xl dark:shadow-gray-500 sm:dark:border">
            <div className="flex justify-center">
              <Image src="/images/brainlogo.png" alt="brain logo" width={100} height={100} />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                Sign in to my brain
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={twJoin(
                      'block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300',
                      'placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                      'dark:bg-gray-900 dark:text-white dark:ring-gray-700'
                    )}
                    {...register('email', { required: true })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={twJoin(
                      'block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300',
                      'placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                      'dark:bg-gray-900 dark:text-white dark:ring-gray-700'
                    )}
                    {...register('password', { required: true })}
                  />
                </div>
              </div>
              <Turnstile siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!} onSuccess={setCaptchaToken} />
              {errors.root && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.root.message}</p>}
              <div className="space-y-2">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={twJoin(
                    'flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:bg-gray-900',
                    'shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-600',
                    'bg-slate-600 hover:bg-slate-700 focus-visible:outline-indigo-600',
                    isSubmitting && 'cursor-not-allowed opacity-50'
                  )}
                >
                  {isSubmitting ? (
                    <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    'Sign in'
                  )}
                </button>
                <a
                  href="/sign_up"
                  className={twJoin(
                    'flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:bg-gray-900',
                    'shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-600',
                    'bg-slate-600 hover:bg-slate-700 focus-visible:outline-indigo-600'
                  )}
                >
                  {isSubmitting ? (
                    <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    'Sign up'
                  )}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
