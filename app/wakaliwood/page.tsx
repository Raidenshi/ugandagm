import Image from 'next/image';
import Link from 'next/link';
import wakaliwoodLogo from '../../public/WakaliWood_Logo.webp';
import { workSans } from '../../utils/fonts';
import Button from '../components/ui/button/button';

import styles from './wakaliwood.module.css';

function Wakaliwood() {
  return (
    <>
      <Image src={wakaliwoodLogo} alt="Wakaliwood logo" width={550} />
      <h1 className={`${workSans.className} ${styles.heading}`}>
        Uganda ♡ Wakaliwood
      </h1>
      <div className={styles.text}>
        <p className={workSans.className}>
          People often ask where our gaming community got its start, some would
          point to some homeless hobo’s streaming community, and whilst they
          might be half right, the other half would be accredited to Wakaliwood
          studios smash-hit movie called ‘‘Who Killed Captain Alex’’. As a
          community, we are HUGE supporters of Wakaliwood and highly suggest
          checking them out.
        </p>
      </div>
      <Link
        href="https://www.wakaliwood.com/"
        target="_blank"
        className={styles.button__wakaliwood}
      >
        <Button>Wakaliwood Studios</Button>
      </Link>
    </>
  );
}

export default Wakaliwood;
