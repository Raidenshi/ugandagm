import PocketBase from 'pocketbase';
import { tribeca } from '../../utils/fonts';
import ContentCreator from '../components/content-creator/content-creator';

import styles from './content-creators.module.css';

export default async function ContentCreators() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const records: any = await (
    await pb.collection('content_creators').getList()
  ).items;

  const creatorsList: React.ReactNode = records.map((record: any) => {
    return <ContentCreator contentCreator={record} key={record.id} />;
  });

  return (
    <>
      <h1 className={`${tribeca.className} ${styles.header}`}>
        Ugandan streamers
      </h1>
      <div className={styles.container}>{creatorsList}</div>;
    </>
  );
}
