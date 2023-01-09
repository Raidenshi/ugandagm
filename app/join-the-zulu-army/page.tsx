import { workSans } from '../../utils/fonts';
import Rules from '../components/rules/rules';

import styles from './join-the-zulu.module.css';

export default function JoinTheZulu() {
  return (
    <>
      <Rules />
      <form className={styles.form}>
        <div className={`${styles.container} ${workSans.className}`}>
          <label htmlFor="steam">Your main Steam account</label>
          <input type="text" id="steam" required />

          <label htmlFor="discord">
            Discord name <span>(your tag, Zulu#7777)</span>
          </label>
          <input type="text" id="discord" required />

          <label htmlFor="twitch">Twitch nickname</label>
          <input type="text" id="twitch" required />

          <label htmlFor="steam">How old are you ?</label>
          <input type="text" id="steam" required />

          <label htmlFor="how-found">How did you find Uganda?</label>
          <input type="text" id="how-found" required />

          <label htmlFor="affiliates">
            Do you know anyone currently in Uganda?
          </label>
          <input type="text" id="affiliates" />

          <label htmlFor="time-zone">Time zone</label>
          <input type="text" id="time-zone" required />

          <label htmlFor="games">Played games with uganda</label>
          <input type="text" id="games" required />

          <label htmlFor="other-communities">Other game cpmmunities</label>
          <input type="text" id="other-communities" required />

          <label htmlFor="gachi">Do you lika gachi ?</label>
          <input type="text" id="gachi" required />

          <label htmlFor="country">What country are you from ?</label>
          <input type="text" id="country" placeholder="Yemen ?" required />

          <label htmlFor="language">
            List your main language and other languages you can speak
          </label>
          <input type="text" id="language" required />

          <label htmlFor="reason">Why are you applying ?</label>
          <input type="text" id="reason" required />

          <label htmlFor="add">Anything else you like to add ?</label>
          <input type="text" id="add" required />

          <input
            className={styles.custom__checkbox}
            type="checkbox"
            id="checkbox"
            required
          />
          <label className={styles.checkbox__label} htmlFor="checkbox">
            I agree with Community Rules
          </label>
        </div>
      </form>
    </>
  );
}
