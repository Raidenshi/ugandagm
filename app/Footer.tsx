import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://discord.gg/uganda"
        target={'_blank'}
        className={styles.footer__link}
      >
        Discord.gg/Uganda
      </Link>
      <Link
        href="https://imgur.com/RxbVYe7"
        target={'_blank'}
        className={styles.footer__secret}
      >
        Supa secret link
      </Link>
      <Link
        href="mailto:BillyUgandaGaming@gmail.com"
        className={styles.footer__link}
      >
        BillyUgandaGaming@gmail.com
      </Link>
    </footer>
  );
}

export default Footer;
