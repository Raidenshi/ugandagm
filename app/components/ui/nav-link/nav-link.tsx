import Link from 'next/link';
import React from 'react';

import styles from './nav-link.module.css';

export default function NavLink({
  path,
  currentPath,
  children,
}: {
  path: string;
  currentPath: string;
  children: string;
}) {
  return (
    <Link
      href={path}
      className={`${styles.link} ${
        currentPath.split('/')[1] === path.split('/')[1] ? styles.active : ''
      }`}
    >
      {children}
    </Link>
  );
}
