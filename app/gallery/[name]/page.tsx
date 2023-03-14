'use client';
import { dbURL } from '../../../utils/const';
import { useEffect, useState } from 'react';
import { tribeca } from '../../../utils/fonts';
import Image from 'next/image';

import styles from '../gallery.module.css';
import NotFound from '../../components/ui/not-found/not-found';

export default function page({ params }: any) {
  const [isLoading, setLoading] = useState(false);
  const [records, setRecords]: any = useState(null);

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
      <NotFound />
    );

  return <p>{records && records[0].collectionName}</p>;
}
