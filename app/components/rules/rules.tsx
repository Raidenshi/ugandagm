import { workSans, tribeca } from '../../../utils/fonts';

import styles from './rules.module.css';

export default function Rules() {
  return (
    <div className={`${workSans.className} ${styles.container}`}>
      <h1 className={`${tribeca.className} ${styles.heading}`}>
        Become a Zulu
      </h1>
      <p>
        APPLICATIONS ARE CURRENTLY OPEN - Application intake is done at the
        start of each month, so you must wait until around the 1st for us to
        read your applications.
      </p>
      <hr />
      <h2>What does joining the Zulu army get you? </h2>
      <ol className={styles.list}>
        <li>
          A safe space to chill out with other Ugandans where you can be
          yourself without fear of mods
        </li>
        <li>
          Free game keys when we get community access into alpha/betas of early
          release games
        </li>
        <li>
          Verified to see all the locked channels of our discord and forums
        </li>
        <li>Community events like tournaments or various contests</li>
      </ol>
      <hr />
      <h2>Community rules</h2>
      <ol className={styles.list}>
        <li>
          Freedom of Speech is a cornerstone of our community. If you get
          offended by words, we aren’t for you.
        </li>
        <li>
          No doxxing of anyone, for any reason, if we find that personal
          information has been used against someone you will be removed from the
          community and local law enforcement will be notified.
        </li>
        <li>
          Be respectful to your fellow Ugandan, we are an international
          community with many races, religions and creeds among us, friendly
          banter is always welcome but never make it personal.
        </li>
        <li>
          Micspam is the Ugandan way of life, if you don’t like it, we probably
          aren’t right for you.
        </li>
        <li>
          Gotta be active at least once every few weeks for as long as real life
          allows you.
        </li>
        <li>
          Anyone found using any form of cheat/exploit in any game we’re playing
          will not only be removed from Uganda but reported by us to developers.
          If we need to cheat to win we aren’t doing it properly.
        </li>
        <li>By applying you confirm being over 18 years old.</li>
        <li>Weebs/Femboys/Furries/Any sort of degeneracy - out.</li>
        <li>No snitches/leakers.</li>
      </ol>
      <hr />
    </div>
  );
}
