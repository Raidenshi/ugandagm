import React from 'react';
import { tribeca, workSans } from '../../../utils/fonts';

import styles from './news-item.module.css';

interface Inews {
  text: string;
  header: string;
  created: string;
}

export default function NewsItem({
  news,
  image,
  index,
  last,
}: {
  news: Inews;
  image?: string | null;
  index: number;
  last?: boolean;
}) {
  const { header, text, created } = news;
  const date = new Date(created).toLocaleDateString();
  return (
    <>
      <div
        className={`${styles.container} ${index % 2 ? styles.reverse : ''} ${
          last ? styles.footer_margin : ''
        }`}
      >
        <div className={`${workSans.className} ${styles.text_container}`}>
          <div>
            <p className={`${tribeca.className} ${styles.title}`}>{header}</p>
            <p
              className={`${styles.text}`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
          <p className={styles.date}>-Billy Uganda {date}</p>
        </div>
        {image ? <img className={styles.image} src={image} alt="" /> : ''}
      </div>
      {!last ? <hr /> : ''}
    </>
  );
}
