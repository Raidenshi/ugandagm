import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { workSans } from '../../../utils/fonts';
import NavLink from '../ui/nav-link/nav-link';
import discordLink from '../../../public/discord-link.webp';

import styles from './full-nav.module.css';

export default function FullNav({ pathName }: { pathName: string }) {
  return (
    <>
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
      <Link href="/forum" className={styles.forum}>
        Forum
      </Link>
    </>
  );
}
