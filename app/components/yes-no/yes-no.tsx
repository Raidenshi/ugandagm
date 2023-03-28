import React from 'react';

import styles from './yes-no.module.css';

export default function YesNo({
  yes,
  no,
  handleIncrease,
  handleDecrease,
}: {
  yes: number;
  no: number;
  handleIncrease: any;
  handleDecrease: any;
}) {
  return (
    <>
      <div className={styles.score_container}>
        <button
          className={`${styles.green} ${styles.button}`}
          onClick={() => handleIncrease()}
        >
          yes
        </button>
        <div className={styles.score}>{yes - no}</div>
        <button className={styles.button} onClick={() => handleDecrease()}>
          no
        </button>
      </div>
    </>
  );
}
