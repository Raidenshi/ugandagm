'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import Loader from '../components/ui/loader/loader';
import Application from '../components/application/application';

export const revalidate = 0;

export default function Forum() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'unauthenticated') {
    signIn();
  }

  if (status === 'authenticated') {
    return <Application />;
  }
}
