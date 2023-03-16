'use client';
import { dbURL } from '../../../utils/const';
import { useEffect, useState } from 'react';
import { tribeca } from '../../../utils/fonts';
import Image from 'next/image';

import styles from '../gallery.module.css';
import NotFound from '../../components/ui/not-found/not-found';
import Loader from '../../components/ui/loader/loader';
import Button from '../../components/ui/button/button';
import GalleryVideos from '../../components/gallery-videos/gallery-videos';
import GalleryImages from '../../components/gallery-images/gallery-images';

export default function page({ params }: any) {
  const [toggle, setToggle] = useState('videos');
  const [isLoading, setLoading] = useState(false);
  const [records, setRecords]: any = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${dbURL}/api/collections/game_${params.name}/records`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.items[0]);
        setLoading(false);
      });
  }, []);

  console.log(records);
  if (isLoading) return <Loader />;
  if (!records) return <NotFound />;

  return (
    <>
      <div className={styles.buttons}>
        <Button onClick={() => setToggle('images')}>Images</Button>
        <Button onClick={() => setToggle('videos')}>Videos</Button>
      </div>
      {toggle === 'videos' ? (
        <GalleryVideos videos={records.videos} />
      ) : (
        <GalleryImages images={records.images} />
      )}
    </>
  );
}
