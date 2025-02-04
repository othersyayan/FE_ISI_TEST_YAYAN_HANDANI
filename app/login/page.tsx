'use client';

import { login } from '@/app/actions';
import { useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';
import { useEffect, useActionState } from 'react';

const initialState = {
  email: '',
  password: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out mt-2"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);

  const user = !!localStorage.getItem('user');

  useEffect(() => {
    if (typeof window !== 'undefined' && state.data) {
      localStorage.setItem('user', JSON.stringify(state.data));
      redirect('/');
    } else if (user) {
      redirect('/');
    }
  }, [state]);

  return (
    <div className="max-w-md mx-auto mt-24">
      <form action={formAction} className="p-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-[#0a0a0a]"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-2">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-[#0a0a0a]"
            placeholder="Enter your password"
          />
        </div>

        <SubmitButton />

        {state.message && (
          <p className="text-white opacity-65 mt-2">{state.message}</p>
        )}
      </form>
    </div>
  );
}
