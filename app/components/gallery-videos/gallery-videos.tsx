import React from 'react';
import NotFound from '../ui/not-found/not-found';

import styles from './gallery-videos.module.css';

export default function GalleryVideos({ videos }: { videos: Array<string> }) {
  return (
    <>
      {videos ? (
        videos.map((id) => {
          return (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              key={id}
              className={styles.video}
            />
          );
        })
      ) : (
        <NotFound />
      )}
    </>
  );
}
