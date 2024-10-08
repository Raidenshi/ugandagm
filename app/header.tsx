'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/UgandaGamingLogo.svg';
import { usePathname } from 'next/navigation';
import MobileNav from './components/mobile-nav/mobile-nav';
import FullNav from './components/full-nav/full-nav';
import { useMediaQuery } from '../hooks/useMediaQuery';

import styles from './header.module.css';

function Menu() {
  const isBreakpoint = useMediaQuery(1320);
  const pathName = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image src={logo} alt="Logo" priority className={styles.logo} />
        </Link>
        {isBreakpoint ? <MobileNav /> : <FullNav pathName={pathName!} />}
      </nav>
    </header>
  );
}

export default Menu;
