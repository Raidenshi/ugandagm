'use client';
import Image from 'next/image';
import Link from 'next/link';
import discordLink from '../public/discord-link.webp';
import logo from '../public/logo.webp';
import { workSans } from '../utils/fonts';
import { usePathname } from 'next/navigation';
import NavLink from './components/ui/nav-link/nav-link';

import styles from './header.module.css';

function Menu() {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" width={95} height={95} priority />
        </Link>
        <ul className={`${styles.list} ${workSans.className}`}>
          <li>
            <NavLink path="/news" currentPath={pathName!}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink path="/gallery" currentPath={pathName!}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink path="/content-creators" currentPath={pathName!}>
              Content Creators
            </NavLink>
          </li>
          <li>
            <NavLink path="/wakaliwood" currentPath={pathName!}>
              Uganda & Wakaliwood Studios
            </NavLink>
          </li>
          <li>
            <NavLink path="/join-the-zulu-army" currentPath={pathName!}>
              Join The Zulu Army
            </NavLink>
          </li>
        </ul>
        <Link
          href="https://discord.gg/uganda"
          target={'_blank'}
          className={styles.discord}
        >
          <Image src={discordLink} alt="discord link" width={80} height={80} />
        </Link>
        <Link href="/" className={styles.forum}>
          Forum
        </Link>
      </nav>
    </header>
  );
}

export default Menu;
