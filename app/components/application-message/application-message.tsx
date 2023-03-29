import React, { useEffect } from 'react';
import { workSans } from '../../../utils/fonts';

import styles from './application-message.module.css';

export default function ApplicationMessage({
  name,
  text,
  image,
}: {
  name: string;
  text: string;
  image: string;
}) {
  return (
    <div className={`${workSans.className} ${styles.container}`}>
      <div>
        <p className={styles.name}>{`${name}`}</p>
        <img className={styles.image} src={`${image}`} alt="pfp" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
