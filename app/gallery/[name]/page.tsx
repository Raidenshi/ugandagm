'use client';
import PocketBase from 'pocketbase';
import { dbURL } from '../../../utils/const';
import { redirect } from 'next/navigation';
import { getRecords } from '../../../services/pocketBase';
import { useEffect, useState } from 'react';
import { tribeca } from '../../../utils/fonts';
import Image from 'next/image';

import styles from '../gallery.module.css';

export default function page({ params }: any) {
  const [isLoading, setLoading] = useState(false);
  const [records, setRecords]: any = useState(null);
  const pb = new PocketBase(dbURL);

  useEffect(() => {
    setLoading(true);
    fetch(`${dbURL}/api/collections/${params.name}/records`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.items);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!records)
    return (
      <>
        <p className={`${styles.not_found} ${tribeca.className}`}>
          Nothing Here
        </p>
        <Image src="/ZULUL.webp" alt="ZULUL" width="200" height="200" />
      </>
    );

  return <p>{records && records[0].collectionName}</p>;
}
