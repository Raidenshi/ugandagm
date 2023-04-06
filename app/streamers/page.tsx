import PocketBase from 'pocketbase';
import { tribeca } from '../../utils/fonts';
import ContentCreator from '../components/content-creator/content-creator';
import { dbURL } from '../../utils/const';
import { getRecords } from '../../services/pocketBase';
import NotFound from '../components/ui/not-found/not-found';

import styles from './streamers.module.css';

export const revalidate = 0;

export default async function Streamers() {
  const pb = new PocketBase(dbURL);
  const records: any = (await getRecords('content_creators', pb)) || null;

  const creatorsList: React.ReactNode = records.map((record: any) => {
    return (
      <ContentCreator
        contentCreator={record}
        key={record.id}
        picture={pb.getFileUrl(record, record.picture)}
      />
    );
  });

  return (
    <>
      <h1 className={`${tribeca.className} ${styles.header}`}>
        Ugandan content creators
      </h1>
      <div className={styles.container}>
        {records ? creatorsList : <NotFound />}
      </div>
    </>
  );
}
