import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { dbURL } from '../../../utils/const';
import { workSans } from '../../../utils/fonts';
import Button from '../ui/button/button';
import Loader from '../ui/loader/loader';
import clueless from '../../../public/clueless.webp';
import PocketBase from 'pocketbase';

import styles from './application.module.css';
import { useSession } from 'next-auth/react';

export default function Application() {
  const [isLoading, setLoading] = useState(true);
  const [records, setRecords]: any = useState(null);
  const [counter, setCounter] = useState(1);
  const { data: session } = useSession();
  const pb = new PocketBase(dbURL);

  const games: any = {
    lostArk: 'Lost ark',
    atlas: 'Atlas',
    lastOasis: 'Last oasis',
    mythEmpires: 'Myth of Empires',
    newWorld: 'New world',
    wow: 'WOW',
    arkSurvivial: 'Ark Survivial',
    mugaGames: 'MUGA games',
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${dbURL}/api/collections/pending_applications/records`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.items);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const handleIncrease = async () => {
    if (records[counter].yes.includes(session?.user?.name)) {
      return;
    }
    const filteredNO = records[counter].no.filter(
      (name: string) => name !== session?.user?.name
    );
    const changedYES = [session?.user?.name, ...records[counter].yes];

    const data = {
      ...records[counter],
      yes: changedYES,
      no: filteredNO,
    };

    const newRecord = await pb
      .collection('pending_applications')
      .update(records[counter].id, data);

    const newRecords = records.map((record: any, i: number) => {
      if (i === counter) {
        return newRecord;
      } else {
        return record;
      }
    });
    setRecords(newRecords);
  };

  const handleDecrease = async () => {
    if (records[counter].no.includes(session?.user?.name)) {
      return;
    }
    const filteredYES = records[counter].yes.filter(
      (name: string) => name !== session?.user?.name
    );
    const changedNO = [session?.user?.name, ...records[counter].no];

    const data = {
      ...records[counter],
      yes: filteredYES,
      no: changedNO,
    };

    const newRecord = await pb
      .collection('pending_applications')
      .update(records[counter].id, data);

    const newRecords = records.map((record: any, i: number) => {
      if (i === counter) {
        return newRecord;
      } else {
        return record;
      }
    });
    setRecords(newRecords);
  };

  return (
    <div className={`${styles.container} ${workSans.className}`}>
      <span className={styles.voted}>
        People voted: {records[counter].yes.length + records[counter].no.length}
      </span>
      <div className={styles.score_container}>
        <button
          className={`${styles.green} ${styles.button}`}
          onClick={() => handleIncrease()}
        >
          yes
        </button>
        <div className={styles.score}>
          {records[counter].yes.length - records[counter].no.length}
        </div>
        <button className={styles.button} onClick={() => handleDecrease()}>
          no
        </button>
      </div>
      <p>
        <span>Discord:</span>
        {records[counter].discord}
      </p>
      <p>
        <span>Steam:</span>
        <Link
          className={styles.link}
          href={records[counter].steam}
          target="_blank"
        >
          Steam
        </Link>
      </p>

      <p>
        <span>Twitch:</span>
        {records[counter].twitch}
      </p>
      <p>
        <span>Logs in:</span>
        <Link
          className={styles.link}
          href={`https://logs.ivr.fi/?channel=forsen&username=${records[counter].twitch}`}
          target="_blank"
        >
          forsen
        </Link>{' '}
        <Link
          className={styles.link}
          href={`https://logs.ivr.fi/?channel=xqc&username=${records[counter].twitch}`}
          target="_blank"
        >
          xqc
        </Link>
      </p>
      <div className={styles.question}>
        <span>How did you find Uganda ?</span>
        <p>{records[counter].howFound}</p>
      </div>
      <div className={styles.question}>
        <span>Do you know anyone currently in Uganda ?</span>
        <p>{records[counter].friends}</p>
      </div>
      <div className={styles.question}>
        <span>What is your timezone ?</span>
        <p>{records[counter].timeZone}</p>
      </div>

      <div className={styles.question}>
        <span>Games played with Uganda:</span>
        <ul>
          {Object.keys(records[counter].gamesPlayed).length ? (
            Object.keys(records[counter].gamesPlayed).map((game: string, i) => {
              return <li key={i}>{games[game]}</li>;
            })
          ) : (
            <Image src={clueless} alt="clueless" width="64" height="70" />
          )}
        </ul>
      </div>
      <div className={styles.question}>
        <span>Any other communities ?</span>
        <p>{records[counter].otherCommunities}</p>
      </div>
      <div className={styles.question}>
        <span>Do you like gachi ?</span>
        <p>{records[counter].gachi}</p>
      </div>

      <div className={styles.question}>
        <span>What country are you from ?</span>
        <p>{records[counter].country}</p>
      </div>
      <div className={styles.question}>
        <span>List your main language and other languages you can speak</span>
        <p>{records[counter].language}</p>
      </div>
      <div className={styles.question}>
        <span>Why are you applying ?</span>
        <p>{records[counter].reason}</p>
      </div>
      <div className={styles.question}>
        <span>Is there anything else you would like to add ?</span>
        <p>{records[counter].add}</p>
      </div>
      <span className={styles.page}>{`${counter + 1}/${records.length}`}</span>
    </div>
  );
}
