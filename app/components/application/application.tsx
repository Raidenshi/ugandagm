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
  const [active, setActive] = useState('');
  const { data: session }: any = useSession();

  const checkVote = (record: any) => {
    if (record.yes.includes(session.user.name)) {
      setActive('yes');
    } else if (record.no.includes(session.user.name)) {
      setActive('no');
    } else setActive('');
  };

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
        checkVote(data.items[0]);
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
    setActive('yes');
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
    setActive('no');
  };

  const handleApprove = async () => {
    await pb.collection('applications_approved').create(records[counter]);
    await pb.collection('applications_pending').delete(records[counter].id);

    const newRecords = records.filter((record: any, i: number) => {
      return counter !== i;
    });
    setRecords(newRecords);
    checkVote(records[counter + 1]);
  };

  const handleDecline = async () => {
    await pb.collection('applications_declined').create(records[counter]);
    await pb.collection('applications_pending').delete(records[counter].id);

    const newRecords = records.filter((record: any, i: number) => {
      return counter !== i;
    });
    setRecords(newRecords);
    checkVote(records[counter + 1]);
  };

  const handleLeft = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
    checkVote(records[counter - 1]);
  };

  const handleRight = () => {
    if (counter + 1 === records.length) {
      return;
    }
    setCounter(counter + 1);
    checkVote(records[counter + 1]);
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
          <Button onClick={() => handleDecline()}>Decline</Button>
        </div>
      )}
      <div className={styles.application}>
        <Button className={styles.arrow} onClick={() => handleLeft()}>
          ‹
        </Button>
        <div className={`${styles.container} ${workSans.className}`}>
          <span className={styles.voted}>
            {new Date(records[counter].created).toLocaleDateString()}
          </span>
          <span className={styles.voted}>
            People voted:{' '}
            {records[counter].yes.length + records[counter].no.length}
          </span>
          <YesNo
            yes={records[counter].yes.length}
            no={records[counter].no.length}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            active={active}
          />
          <div>
            <span>Discord:</span>
            {records[counter].discord}
          </div>
          <div>
            <span>Steam: </span>
            <Link
              className={styles.link}
              href={records[counter].steam}
              target="_blank"
            >
              {records[counter].steam}
            </Link>
          </div>

          <div>
            <span>Twitch: </span>
            {records[counter].twitch}
          </div>
          <div>
            <span>How did you find Uganda: </span>
            {records[counter].howFound}
          </div>
          <div>
            <span>Do you know anyone currently in Uganda: </span>
            {records[counter].friends}
          </div>
          <div>
            <span>What is your timezone: </span>
            {records[counter].timeZone}
          </div>

          <div className={styles.question}>
            <span>Games played with Uganda:</span>

            {Object.keys(records[counter].gamesPlayed).length
              ? Object.keys(records[counter].gamesPlayed).map(
                  (game: string, i) => {
                    return `${games[game]}, `;
                  }
                )
              : ''}
          </div>
          <div>
            <span>Any other communities: </span>
            {records[counter].otherCommunities}
          </div>
          <div className={styles.question}>
            <span>Do you like gachi: </span>
            {records[counter].gachi}
          </div>
          <div>
            <span>What country are you from: </span>
            {records[counter].country}
          </div>
          <div className={styles.question}>
            <span>Languages:</span>
            {records[counter].language}
          </div>
          <div className={styles.question}>
            <span>Why are you applying:</span>
            {records[counter].reason}
          </div>
          <div className={styles.question}>
            <span>Is there anything else you would like to add: </span>
            {records[counter].add}
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
