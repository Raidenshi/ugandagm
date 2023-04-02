import Image from 'next/image';
import Link from 'next/link';
import mainLogo from '../public/mainLogo.webp';
import pastor from '../public/pastor.webp';
import { tribeca, workSans } from '../utils/fonts';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Image
        src={mainLogo}
        alt="Main logo"
        width={800}
        className={styles.logo}
        priority
      />
      <div className={styles.pattern} />
      <h1 className={`${tribeca.className} ${styles.heading}`}>
        WELCOME TO UGANDA!
      </h1>
      <iframe
        className={styles.video}
        src="https://player.cloudinary.com/embed/?public_id=UgandaPromotional_mwdnnz&cloud_name=dqjvkuczs&player[colors][base]=%23343738&player[colors][accent]=%23eb1e26&player[colors][text]=%23efefef&player[posterOptions][transformation][startOffset]=100"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
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
          <Link href="/join-the-zulu-army" className={styles.link}>
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
