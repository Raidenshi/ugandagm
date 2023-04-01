import React, { useEffect, useState } from 'react';
import NotFound from '../ui/not-found/not-found';
import Masonry from 'react-responsive-masonry';

import styles from './gallery-images.module.css';

export default function GalleryImages({ images }: { images: Array<string> }) {
  const [modal, setModal] = useState(false);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    if (window.innerWidth <= 1200 && window.innerWidth > 600) {
      setColumns(2);
    } else if (window.innerWidth <= 600) {
      setColumns(1);
    }
  });

  return (
    <>
      {images ? (
        <Masonry
          columnsCount={columns}
          gutter="10px"
          className={styles.masonry}
        >
          {images.map((link, i) => {
            return <img src={link} key={i} />;
          })}
        </Masonry>
      ) : (
        <NotFound />
      )}
    </>
  );
}
