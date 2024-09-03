'use client';
import { useState, useEffect } from 'react';
import { workSans } from '../../utils/fonts';
import Rules from '../components/rules/rules';
import Button from '../components/ui/button/button';
import PocketBase from 'pocketbase';
import { dbURL } from '../../utils/const';

import styles from './join-us.module.css';

interface games {
  lostArk?: boolean;
  atlas?: boolean;
  lastOasis?: boolean;
  mythEmpires?: boolean;
  newWorld?: boolean;
  wow?: boolean;
  arkSurvivial?: boolean;
  rust?: boolean;
  mugaGames?: boolean;
}

interface IForm {
  steam?: string;
  discord?: string;
  twitch?: string;
  howFound?: string;
  friends?: string;
  timeZone?: string;
  gamesPlayed?: games;
  otherCommunities?: string;
  gachi?: string;
  country?: string;
  language?: string;
  reason?: string;
  add?: string;
  yes?: string[];
  no?: string[];
}

export default function JoinUs() {
  const pb = new PocketBase(dbURL);

  const initialState: IForm = {
    steam: '',
    discord: '',
    twitch: '',
    howFound: '',
    friends: '',
    timeZone: '',
    gachi: '',
    country: '',
    language: '',
    reason: '',
    add: '',
    gamesPlayed: {},
    yes: [],
    no: [],
    otherCommunities: 'no',
  };

  const [form, setForm] = useState<IForm>(initialState);

  const handleSumbit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await pb.collection('applications_pending').create(form);
    setForm(initialState);
    window.document.scrollingElement?.scrollTo(0, 0);
  };

  const handleChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (target.type === 'checkbox') {
      setForm({ ...form, gamesPlayed: { ...form.gamesPlayed, [name]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return (
    <>
      <Rules />
      <form className={styles.form} onSubmit={handleSumbit}>
        <div className={`${styles.container} ${workSans.className}`}>
          <label htmlFor="steam">Link to your main Steam account</label>
          <input
            value={form.steam || ''}
            onChange={handleChange}
            name="steam"
            type="text"
            id="steam"
            required
            autoComplete="off"
          />

          <label htmlFor="discord">
            Discord username
          </label>
          <input
            value={form.discord || ''}
            onChange={handleChange}
            name="discord"
            type="text"
            id="discord"
            required
            autoComplete="off"
          />

          <label htmlFor="twitch">Twitch nickname</label>
          <input
            value={form.twitch || ''}
            onChange={handleChange}
            name="twitch"
            type="text"
            id="twitch"
            required
            autoComplete="off"
          />

          <label htmlFor="howFound">How did you find Uganda?</label>
          <input
            value={form.howFound || ''}
            onChange={handleChange}
            name="howFound"
            type="text"
            id="howFound"
            required
            autoComplete="off"
          />

          <label htmlFor="friends">
            Do you know anyone currently in Uganda?
          </label>
          <input
            value={form.friends || ''}
            onChange={handleChange}
            name="friends"
            type="text"
            id="friends"
            autoComplete="off"
          />

          <label htmlFor="timeZone">
            What time zone are you? <span>(+GMT would be preferred)</span>
          </label>
          <input
            value={form.timeZone || ''}
            onChange={handleChange}
            name="timeZone"
            type="text"
            id="timeZone"
            required
            autoComplete="off"
          />

          <label htmlFor="games">
            Have you played any of the below games with Uganda?
          </label>

          <input
            className={styles.custom__checkbox}
            onChange={handleChange}
            checked={form.gamesPlayed?.lostArk}
            name="lostArk"
            type="checkbox"
            id="lostArk"
          />
          <label className={styles.checkbox__label} htmlFor="lostArk">
            Lost Ark
          </label>

          <input
            onChange={handleChange}
            checked={form.gamesPlayed?.atlas}
            name="atlas"
            className={styles.custom__checkbox}
            type="checkbox"
            id="atlas"
          />
          <label className={styles.checkbox__label} htmlFor="atlas">
            Atlas
          </label>

          <input
            onChange={handleChange}
            checked={form.gamesPlayed?.lastOasis}
            name="lastOasis"
            className={styles.custom__checkbox}
            type="checkbox"
            id="lastOasis"
          />
          <label className={styles.checkbox__label} htmlFor="lastOasis">
            Last Oasis
          </label>

          <input
            onChange={handleChange}
            checked={form.gamesPlayed?.mythEmpires}
            name="mythEmpires"
            className={styles.custom__checkbox}
            type="checkbox"
            id="mythEmpires"
          />
          <label className={styles.checkbox__label} htmlFor="mythEmpires">
            Myth of Empires
          </label>

          <input
            onChange={handleChange}
            checked={form.gamesPlayed?.newWorld}
            name="newWorld"
            className={styles.custom__checkbox}
            type="checkbox"
            id="newWorld"
          />
          <label className={styles.checkbox__label} htmlFor="newWorld">
            New World
          </label>

          <input
            className={styles.custom__checkbox}
            onChange={handleChange}
            checked={form.gamesPlayed?.wow}
            name="wow"
            type="checkbox"
            id="wow"
          />
          <label className={styles.checkbox__label} htmlFor="wow">
            World of Warcraft
          </label>

          <input
            onChange={handleChange}
            checked={form.gamesPlayed?.arkSurvivial}
            name="arkSurvivial"
            className={styles.custom__checkbox}
            type="checkbox"
            id="arkSurvivial"
          />
          <label className={styles.checkbox__label} htmlFor="arkSurvivial">
            Ark survivial
          </label>

          <input
            className={styles.custom__checkbox}
            onChange={handleChange}
            checked={form.gamesPlayed?.rust}
            name="rust"
            type="checkbox"
            id="rust"
          />
          <label className={styles.checkbox__label} htmlFor="rust">
            Rust
          </label>

          <input
            onChange={handleChange}
            checked={form.gamesPlayed?.mugaGames}
            name="mugaGames"
            className={styles.custom__checkbox}
            type="checkbox"
            id="mugaGames"
          />
          <label className={styles.checkbox__label} htmlFor="mugaGames">
            MUGA games
          </label>

          <label htmlFor="otherCommunities" className={styles.marginb}>
            Have you been a part of other communities?{' '}
            <span>( List them, if you did )</span>
          </label>
          <input
            onChange={handleChange}
            value={form.otherCommunities}
            name="otherCommunities"
            type="text"
            id="otherCommunities"
            required
            autoComplete="off"
          />

          <label htmlFor="gachi">Do you like gachi?</label>
          <input
            onChange={handleChange}
            value={form.gachi}
            name="gachi"
            type="text"
            id="gachi"
            required
            autoComplete="off"
          />

          <label htmlFor="country">What country are you from?</label>
          <input
            onChange={handleChange}
            value={form.country}
            name="country"
            type="text"
            id="country"
            placeholder="Yemen?"
            required
            autoComplete="off"
          />

          <label htmlFor="language">
            List your main language and other languages you can speak
          </label>
          <input
            onChange={handleChange}
            value={form.language}
            name="language"
            type="text"
            id="language"
            required
            autoComplete="off"
          />

          <label htmlFor="reason">
            Why are you applying? <span>( LULE )</span>
          </label>
          <input
            onChange={handleChange}
            value={form.reason}
            name="reason"
            type="text"
            id="reason"
            required
            autoComplete="off"
          />

          <label htmlFor="add">
            Is there anything else you would like to add?
          </label>
          <input
            onChange={handleChange}
            value={form.add}
            name="add"
            type="text"
            id="add"
            required
            autoComplete="off"
          />

          <input
            className={styles.custom__checkbox}
            type="checkbox"
            id="checkbox"
            required
          />
          <label className={styles.checkbox__label} htmlFor="checkbox">
            I agree with Community Rules
          </label>
          <Button className={styles.send}>Send</Button>
        </div>
      </form>
    </>
  );
}
