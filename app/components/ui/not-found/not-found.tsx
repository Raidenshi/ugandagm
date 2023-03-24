import Image from 'next/image';
import { tribeca } from '../../../../utils/fonts';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <p className={`${styles.not_found} ${tribeca.className}`}>Nothing Here</p>
      <Image src="/zulul.webp" alt="ZULUL" width="200" height="200" />
    </>
  );
}
