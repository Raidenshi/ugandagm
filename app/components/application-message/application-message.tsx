import React from 'react';
import { workSans } from '../../../utils/fonts';

import styles from './application-message.module.css';

export default function ApplicationMessage({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <div className={`${workSans.className} ${styles.container}`}>
      <p className={styles.name}>{name}:</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
