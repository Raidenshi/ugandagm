import Image from 'next/image';
import Link from 'next/link';
import { proxima } from '../utils/fonts';
import bird from '../public/The_Bird.svg';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.pattern} />
      <iframe
        className={styles.video}
        src="https://player.cloudinary.com/embed/?public_id=UgandaPromotional_mwdnnz&cloud_name=dqjvkuczs&player[colors][base]=%23343738&player[colors][accent]=%23eb1e26&player[colors][text]=%23efefef&player[posterOptions][transformation][startOffset]=100"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
      <div className={styles.pattern} />
      <div className={styles.introduction}>
        <div className={`${proxima.className} ${styles.text}`}>
          <p>
            The home of bajs, trolls, zulu-warriors, streamsnipers and mic
            spammers.
          </p>
          <p>
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
          <p>
            If you are interested in joining Uganda, head on over to{' '}
            <Link href="/join-the-zulu-army" className={styles.link}>
              Join the Zulu Army
            </Link>
          </p>
        </div>
        <Image src={bird} alt="Bird" className={styles.bird} />
      </div>
    </>
  );
}
