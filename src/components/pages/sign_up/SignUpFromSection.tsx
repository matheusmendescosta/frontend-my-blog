'use client';

import { twJoin } from 'tailwind-merge';
import { useSignUp } from './use-sign-up';

export default function SignUpFromSection() {
  const { handleSubmit, register } = useSignUp();

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%,' +
              '45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className={twJoin(
            'relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr',
            'from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          )}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Register</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Create an account to share a little about your experiences.</p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                type="text"
                autoComplete="organization"
                className={twJoin(
                  `block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1`,
                  `outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2`,
                  `focus:outline-indigo-600`
                )}
                {...register('name')}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={twJoin(
                  'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1',
                  'outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                  'focus:outline-indigo-600'
                )}
                {...register('email')}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                type="password"
                autoComplete="password"
                className={twJoin(
                  'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1',
                  'outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2',
                  'focus:outline-indigo-600'
                )}
                {...register('password')}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={twJoin(
              'block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm',
              'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
              'focus-visible:outline-indigo-600'
            )}
          >
            Let&#39;s share knowledge
          </button>
        </div>
        <div className="mt-5">
          <a
            href="/sign_in"
            className={twJoin(
              'block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm',
              'hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
              'focus-visible:outline-indigo-600'
            )}
          >
            Already have an account? Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
