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
      <p className={styles.name}>{`${name}`}</p>
      <div>
        <img className={styles.image} src={`${image}`} alt="pfp" />
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
