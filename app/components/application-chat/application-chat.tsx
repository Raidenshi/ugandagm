import React, { useState } from 'react';
import { workSans } from '../../../utils/fonts';
import Button from '../ui/button/button';
import PocketBase from 'pocketbase';
import { useSession } from 'next-auth/react';

import styles from './application-chat.module.css';
import ApplicationMessage from '../application-message/application-message';

export default function ApplicationChat({
  pb,
  record,
  setRecords,
  counter,
  records,
}: {
  pb: PocketBase;
  record: any;
  setRecords: any;
  counter: number;
  records: any;
}) {
  const { data: session }: any = useSession();
  const [textarea, setTextarea] = useState('');

  const handleSend = async () => {
    if (!textarea) {
      return;
    }
    const hotRecord = await pb
      .collection('applications_pending')
      .getOne(record.id);
    if (hotRecord.msgs === null) {
      hotRecord.msgs = [
        {
          name: session?.user?.name,
          text: textarea,
          image: session.user.image,
        },
      ];
    } else {
      hotRecord.msgs = [
        ...hotRecord.msgs,
        {
          name: session?.user?.name,
          text: textarea,
          image: session.user.image,
        },
      ];
    }
    const newRecord = await pb
      .collection('applications_pending')
      .update(record.id, hotRecord);

    const newRecords = records.map((record: any, i: number) => {
      if (i === counter) {
        return newRecord;
      } else {
        return record;
      }
    });
    setRecords(newRecords);
    setTextarea('');
  };

  return (
    <>
      <div className={styles.msgs}>
        {record.msgs &&
          record.msgs.map((msg: any, index: number) => {
            return (
              <ApplicationMessage
                image={msg.image}
                name={msg.name}
                text={msg.text}
                key={index}
              />
            );
          })}
      </div>
      <div className={styles.container}>
        <textarea
          className={`${workSans.className} ${styles.txt}`}
          onChange={(e) => setTextarea(e.target.value)}
          value={textarea || ''}
          maxLength={200}
        />
        <Button className={styles.button} onClick={() => handleSend()}>
          Send
        </Button>
      </div>
    </>
  );
}
