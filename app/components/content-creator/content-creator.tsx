import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IContentCreator } from '../../../types/content-creator';
import { workSans } from '../../../utils/fonts';
import Button from '../ui/button/button';

import styles from './content-creator.module.css';

export default function ContentCreator({
  contentCreator,
}: {
  contentCreator: IContentCreator;
}) {
  const { name, link, description, picture } = contentCreator;

  return (
    <div className={`${workSans.className} ${styles.container}`}>
      <Link href={link} target={'_blank'}>
        <img
          src={picture}
          alt="Profile picture"
          width="150"
          height="150"
          className={styles.image}
        />
      </Link>

      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        <Link href={link} target={'_blank'}>
          <Button>{name}</Button>
        </Link>
      </div>
    </div>
  );
}
