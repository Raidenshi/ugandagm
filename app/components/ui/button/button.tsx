import React from 'react';
import { tribeca } from '../../../../utils/fonts';

import styles from './button.module.css';

function Button({
  children,
  className = '',
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`${styles.button} ${tribeca.className} ${className}`}>
      {children}
    </div>
  );
}

export default Button;
