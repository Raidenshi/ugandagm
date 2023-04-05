import localFont from '@next/font/local';
import { Work_Sans } from '@next/font/google';

export const tribeca = localFont({
  src: '../fonts/TRIBECA_.woff',
  display: 'swap',
});
export const workSans = Work_Sans({ subsets: ['latin'] });
export const proxima = localFont({
  src: '../fonts/proxima-black.ttf',
  display: 'swap',
});
export const proximaLight = localFont({
  src: '../fonts/proxima-light.ttf',
  display: 'swap',
});
