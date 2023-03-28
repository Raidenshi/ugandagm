import React from 'react';
import NotFound from '../ui/not-found/not-found';
import Masonry from 'react-responsive-masonry';

import styles from './gallery-images.module.css';

export default function GalleryImages({ images }: { images: Array<string> }) {
  return (
    <>
      {images ? (
        <Masonry columnsCount={3} gutter="10px" className={styles.masonry}>
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
