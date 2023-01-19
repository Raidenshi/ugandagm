import React, { MouseEventHandler } from 'react';
import { tribeca } from '../../../../utils/fonts';

import styles from './button.module.css';

function Button({
  children,
  className = '',
  onClick,
}: {
  children: string;
  className?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <button
      className={`${styles.button} ${tribeca.className} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
