'use client';
import { dbURL } from '../../../utils/const';
import { useEffect, useState } from 'react';

import styles from '../gallery.module.css';
import NotFound from '../../components/ui/not-found/not-found';
import Loader from '../../components/ui/loader/loader';
import Button from '../../components/ui/button/button';
import GalleryVideos from '../../components/gallery-videos/gallery-videos';
import GalleryImages from '../../components/gallery-images/gallery-images';

export const revalidate = 0;

export default function page({ params }: any) {
  const [toggle, setToggle] = useState('images');
  const [isLoading, setLoading] = useState(false);
  const [records, setRecords]: any = useState(null);
  const game = params.name;

  useEffect(() => {
    setLoading(true);
    fetch(`${dbURL}/api/collections/game_${game}/records`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.items[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (!records) return <NotFound />;

  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() => setToggle('images')}
          className={toggle === 'images' ? styles.active : ''}
        >
          Images
        </Button>
        <Button
          onClick={() => setToggle('videos')}
          className={toggle === 'videos' ? styles.active : ''}
        >
          Videos
        </Button>
      </div>
      {toggle === 'videos' ? (
        <GalleryVideos videos={records.videos} />
      ) : (
        <GalleryImages images={records.images} />
      )}
    </>
  );
}
