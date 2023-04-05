import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { tribeca, proximaLight } from '../../../utils/fonts';
import NavLink from '../ui/nav-link/nav-link';
import discordLink from '../../../public/discord-link.webp';
import forumLink from '../../../public/ApplicationButton.svg';

import styles from './full-nav.module.css';

export default function FullNav({ pathName }: { pathName: string }) {
  return (
    <div className={styles.links}>
      <ul className={`${styles.list} ${proximaLight.className}`}>
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
          <NavLink path="/streamers" currentPath={pathName!}>
            Streamers
          </NavLink>
        </li>
        <li>
          <NavLink path="/wakaliwood" currentPath={pathName!}>
            Wakaliwood
          </NavLink>
        </li>
        <li>
          <NavLink path="/join-us" currentPath={pathName!}>
            Join us
          </NavLink>
        </li>
      </ul>
      <div className={styles.welcome}>
        <h1 className={`${styles.heading} ${tribeca.className}`}>
          WELCOME TO UGANDA !
        </h1>
        <div className={styles.buttons}>
          <Link href="https://discord.gg/uganda" target={'_blank'}>
            <Image
              src={discordLink}
              alt="discord link"
              width={80}
              height={80}
              className={styles.discord}
            />
          </Link>
          <Link href="/forum">
            <Image
              src={forumLink}
              alt="discord link"
              width={80}
              height={80}
              className={styles.forum}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
