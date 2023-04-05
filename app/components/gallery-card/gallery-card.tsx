import Link from 'next/link';
import React from 'react';

import styles from './gallery-card.module.css';

export default function GalleryCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <Link href={`gallery/${name}`}>
      <img className={styles.image} src={image} />
    </Link>
  );
}
