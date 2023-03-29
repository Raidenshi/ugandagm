import React from 'react';

import styles from './yes-no.module.css';

export default function YesNo({
  yes,
  no,
  handleIncrease,
  handleDecrease,
  active,
}: {
  yes: number;
  no: number;
  handleIncrease: any;
  handleDecrease: any;
  active?: string;
}) {
  return (
    <>
      <div className={styles.score_container}>
        <button
          className={`${styles.green} ${styles.button} ${
            active === 'yes' ? styles.active : ''
          }`}
          onClick={() => handleIncrease()}
        >
          Yes
        </button>
        <div className={styles.score}>{yes - no}</div>
        <button
          className={`${styles.button} ${active === 'no' ? styles.active : ''}`}
          onClick={() => handleDecrease()}
        >
          No
        </button>
      </div>
    </>
  );
}
