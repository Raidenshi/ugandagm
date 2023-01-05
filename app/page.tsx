import Image from 'next/image';
import localFont from '@next/font/local';
import mainLogo from '../public/mainLogo.png';

import styles from './page.module.css';

const font = localFont({ src: '../fonts/TRIBECA_.woff' });

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={mainLogo}
        alt="Main logo"
        width={600}
        className={styles.logo}
      />
      <div className={styles.pattern}></div>
      <h1 className={`${font.className} ${styles.heading}`}>
        WELCOME TO UGANDA!
      </h1>
    </main>
  );
}
