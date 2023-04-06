import React, { useEffect, useState, MouseEvent, useRef } from 'react';
import NotFound from '../ui/not-found/not-found';
import Masonry from 'react-responsive-masonry';

import styles from './gallery-images.module.css';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export default function GalleryImages({ images }: { images: Array<string> }) {
  const [modal, setModal] = useState(false);
  const [columns, setColumns] = useState(3);
  const [current, setCurrent] = useState(-1);
  const breakPoint1 = useMediaQuery(1200);
  const breakPoint2 = useMediaQuery(600);

  const handleOpen = (i: number) => {
    setCurrent(i);
    setModal(true);
  };
  const handleClose = () => {
    setCurrent(-1);
    setModal(false);
  };

  return (
    <>
      {images ? (
        <Masonry
          columnsCount={breakPoint2 ? 1 : breakPoint1 ? 2 : 3}
          gutter="10px"
          className={styles.masonry}
        >
          {images.map((link, i) => {
            return <img src={link} key={i} onClick={(e) => handleOpen(i)} />;
          })}
        </Masonry>
      ) : (
        <NotFound />
      )}
      {modal && (
        <div className={styles.modal} onClick={() => handleClose()}>
          <img src={images[current]} className={styles.active} />
        </div>
      )}
    </>
  );
}
