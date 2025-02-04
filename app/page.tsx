'use client';

import { redirect } from 'next/navigation';

export default function Home() {
  const user = !!localStorage.getItem('user');

  if (!user) {
    redirect('/login');
  } else {
    redirect('/dashboard');
  }
}
