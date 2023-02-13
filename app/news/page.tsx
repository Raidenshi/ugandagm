import PocketBase from 'pocketbase';
import NewsItem from '../components/news-item/news-item';

import styles from './news.module.css';

export default async function News() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const records: any = await (await pb.collection('news').getList()).items;

  const news: React.ReactNode = records.map((record: any, index: number) => {
    if (index === records.length - 1) {
      return (
        <NewsItem
          key={record.id}
          news={record}
          image={pb.getFileUrl(record, record.image)}
          index={index}
          last={true}
        />
      );
    } else
      return (
        <NewsItem
          key={record.id}
          news={record}
          image={pb.getFileUrl(record, record.image)}
          index={index}
        />
      );
  });

  return <div className={styles.container}>{news}</div>;
}
