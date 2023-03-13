'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function Forum() {
  const { data: session, status } = useSession();

  console.log(status);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    signIn();
  }

  if (status === 'authenticated') {
    return <button onClick={() => signOut()}>Sign out</button>;
  }
}
