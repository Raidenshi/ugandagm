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
import NotFound from '../ui/not-found/not-found';
import YesNo from '../yes-no/yes-no';
import ApplicationChat from '../application-chat/application-chat';

export default function Application() {
  const [isLoading, setLoading] = useState(true);
  const [records, setRecords]: any = useState(null);
  const [counter, setCounter] = useState(0);
  const { data: session }: any = useSession();
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
    fetch(`${dbURL}/api/collections/applications_pending/records`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.items);
        setLoading(false);
      });
  }, []);

  const handleIncrease = async () => {
    if (records[counter].yes.includes(session?.user?.name)) {
      return;
    }
    const freshRecord = await pb
      .collection('applications_pending')
      .getOne(records[counter].id);

    const filteredNO = freshRecord.no.filter(
      (name: string) => name !== session?.user?.name
    );
    const changedYES = [session?.user?.name, ...freshRecord.yes];

    const data = {
      ...freshRecord,
      yes: changedYES,
      no: filteredNO,
    };

    const newRecord = await pb
      .collection('applications_pending')
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
    const freshRecord = await pb
      .collection('applications_pending')
      .getOne(records[counter].id);

    const filteredYES = freshRecord.yes.filter(
      (name: string) => name !== session?.user?.name
    );
    const changedNO = [session?.user?.name, ...freshRecord.no];

    const data = {
      ...freshRecord,
      yes: filteredYES,
      no: changedNO,
    };

    const newRecord = await pb
      .collection('applications_pending')
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

  const handleApprove = async () => {
    await pb.collection('applications_approved').create(records[counter]);
    await pb.collection('applications_pending').delete(records[counter].id);

    const newRecords = records.filter((record: any, i: number) => {
      return counter !== i;
    });
    setRecords(newRecords);
  };

  const declineApprove = async () => {
    await pb.collection('applications_declined').create(records[counter]);
    await pb.collection('applications_pending').delete(records[counter].id);

    const newRecords = records.filter((record: any, i: number) => {
      return counter !== i;
    });
    setRecords(newRecords);
  };

  const handleLeft = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const handleRight = () => {
    if (counter + 1 === records.length) {
      return;
    }
    setCounter(counter + 1);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (records == false) {
    return <NotFound />;
  }

  return (
    <>
      {session?.user?.id == 904710068459687986 && (
        <div className={styles.billyButtons}>
          <Button onClick={() => handleApprove()}>Approve</Button>
          <Button onClick={() => declineApprove()}>Decline</Button>
        </div>
      )}
      <div className={styles.application}>
        <Button className={styles.arrow} onClick={() => handleLeft()}>
          ‹
        </Button>
        <div className={`${styles.container} ${workSans.className}`}>
          <span className={styles.voted}>
            People voted:{' '}
            {records[counter].yes.length + records[counter].no.length}
          </span>
          <YesNo
            yes={records[counter].yes.length}
            no={records[counter].no.length}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
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
            <span>How did you find Uganda?</span>
            <p>{records[counter].howFound}</p>
          </div>
          <div className={styles.question}>
            <span>Do you know anyone currently in Uganda?</span>
            <p>{records[counter].friends}</p>
          </div>
          <div className={styles.question}>
            <span>What is your timezone?</span>
            <p>{records[counter].timeZone}</p>
          </div>

          <div className={styles.question}>
            <span>Games played with Uganda:</span>
            <ul>
              {Object.keys(records[counter].gamesPlayed).length ? (
                Object.keys(records[counter].gamesPlayed).map(
                  (game: string, i) => {
                    return <li key={i}>{games[game]}</li>;
                  }
                )
              ) : (
                <Image src={clueless} alt="clueless" width="64" height="70" />
              )}
            </ul>
          </div>
          <div className={styles.question}>
            <span>Any other communities?</span>
            <p>{records[counter].otherCommunities}</p>
          </div>
          <div className={styles.question}>
            <span>Do you like gachi?</span>
            <p>{records[counter].gachi}</p>
          </div>

          <div className={styles.question}>
            <span>What country are you from?</span>
            <p>{records[counter].country}</p>
          </div>
          <div className={styles.question}>
            <span>
              List your main language and other languages you can speak
            </span>
            <p>{records[counter].language}</p>
          </div>
          <div className={styles.question}>
            <span>Why are you applying?</span>
            <p>{records[counter].reason}</p>
          </div>
          <div className={styles.question}>
            <span>Is there anything else you would like to add?</span>
            <p>{records[counter].add}</p>
          </div>
          <span className={styles.page}>{`${counter + 1}/${
            records.length
          }`}</span>
        </div>
        <Button className={styles.arrow} onClick={() => handleRight()}>
          ›
        </Button>
      </div>
      <ApplicationChat
        pb={pb}
        record={records[counter]}
        setRecords={setRecords}
        records={records}
        counter={counter}
      />
    </>
  );
}
