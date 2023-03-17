import 'normalize.css';
import '@/styles/index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
