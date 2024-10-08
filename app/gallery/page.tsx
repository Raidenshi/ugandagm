import PocketBase from 'pocketbase';
import { dbURL } from '../../utils/const';
import GalleryCard from '../components/gallery-card/gallery-card';

import styles from './gallery.module.css';

export const revalidate = 0;

export default async function Gallery() {
  const pb = new PocketBase(dbURL);
  const records: any = (await pb.collection('gallery').getList()).items;

  return (
    <div className={styles.container}>
      {records.map((record: any, i: number) => {
        return (
          <GalleryCard
            name={record.name}
            image={pb.getFileUrl(record, record.image)}
            key={i}
          />
        );
      })}
    </div>
  );
}
