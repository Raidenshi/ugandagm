'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.webp';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import styles from './header.module.css';
import MobileNav from './components/mobile-nav/mobile-nav';
import FullNav from './components/full-nav/full-nav';

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function Menu() {
  const isBreakpoint = useMediaQuery(1320);
  const pathName = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" width={95} height={95} priority />
        </Link>
        {isBreakpoint ? <MobileNav /> : <FullNav pathName={pathName!} />}
      </nav>
    </header>
  );
}

export default Menu;
