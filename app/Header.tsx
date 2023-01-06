import Link from 'next/link';
import Image from 'next/image';
import { Work_Sans } from '@next/font/google';
import styles from './Header.module.css';

const workSans = Work_Sans({ subsets: ['latin'] });

function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={95} height={95} />
        </Link>
        <ul className={`${styles.list} ${workSans.className}`}>
          <li>
            <Link href="/" className={styles.link}>
              News
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Content Creators
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Uganda & Wakaliwood Studios
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Join The Zulu Army
            </Link>
          </li>
        </ul>
        <Link
          href="https://discord.gg/uganda"
          target={'_blank'}
          className={styles.discord}
        >
          <Image
            src="/discord-link.png"
            alt="discord link"
            width={80}
            height={80}
          />
        </Link>
        <Link href="/" className={styles.forum}>
          Forum
        </Link>
      </nav>
    </header>
  );
}

export default Menu;
