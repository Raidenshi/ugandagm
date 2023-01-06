import Image from 'next/image';
import Link from 'next/link';
import mainLogo from '../public/mainLogo.png';
import pastor from '../public/pastor.png';
import { tribeca, workSans } from '../utils/fonts';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Image
        src={mainLogo}
        alt="Main logo"
        width={600}
        className={styles.logo}
      />
      <div className={styles.pattern} />
      <h1 className={`${tribeca.className} ${styles.heading}`}>
        WELCOME TO UGANDA!
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9lpdZh2h6Is"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className={styles.text}>
        <p className={workSans.className}>
          The home of bajs, trolls, zulu-warriors, streamsnipers and mic
          spammers.
        </p>
        <p className={workSans.className}>
          Feel free to poke around, head on over
          <Link
            href="https://discord.gg/uganda"
            target="_blank"
            className={styles.link}
          >
            Discord
          </Link>
          to see what’s going on <br /> and have a chat, or to ask questions
          about joining.
        </p>
        <p className={workSans.className}>
          If you are interested in joining Uganda, head on over to{' '}
          <Link href="#" className={styles.link}>
            Join the Zulu Army
          </Link>
        </p>
      </div>
      <div className={styles.pastor__container}>
        <Image
          src={pastor}
          width={375}
          height={375}
          alt="Pastor lul"
          className={styles.pastor}
        />
      </div>
    </>
  );
}
