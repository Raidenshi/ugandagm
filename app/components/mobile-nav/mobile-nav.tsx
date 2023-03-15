import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { workSans } from '../../../utils/fonts';
import closeIcon from '../../../public/close-icon.svg';

import styles from './mobile-nav.module.css';

export default function MobileNav() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={styles.burger} onClick={() => setActive(true)}>
        <span />
      </div>
      <ul
        className={`${styles.menu} ${workSans.className} ${
          active ? '' : styles.active
        }`}
      >
        <li onClick={() => setActive(false)}>
          <Link href="/news">News</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/content-creators">Content Creators</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/wakaliwood">Uganda & Wakaliwood Studios</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/join-the-zulu-army">Join The Zulu Army</Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link
            href="https://discord.gg/uganda"
            target={'_blank'}
            className={styles.discord}
          >
            Discord
          </Link>
        </li>
        <li onClick={() => setActive(false)}>
          <Link href="/forum" className={styles.forum}>
            Forum
          </Link>
        </li>
        <Image
          src={closeIcon}
          alt="close"
          className={styles.close}
          onClick={() => setActive(false)}
        />
      </ul>
    </>
  );
}
