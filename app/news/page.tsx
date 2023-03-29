import PocketBase from 'pocketbase';
import NewsItem from '../components/news-item/news-item';
import { dbURL } from '../../utils/const';
import { getRecords } from '../../services/pocketBase';

import styles from './news.module.css';

export const revalidate = 0;

export default async function News() {
  const pb = new PocketBase(dbURL);
  let records: any = await getRecords('news', pb);
  records = records.reverse();

  const news: any = records.map((record: any, index: number) => {
    if (index === records.length - 1) {
      return (
        <NewsItem
          key={record.id}
          news={record}
          image={
            records[index].image ? pb.getFileUrl(record, record.image) : null
          }
          index={index}
          last={true}
        />
      );
    } else
      return (
        <NewsItem
          key={record.id}
          news={record}
          image={
            records[index].image ? pb.getFileUrl(record, record.image) : null
          }
          index={index}
        />
      );
  });

  return <div className={styles.container}>{news}</div>;
}
