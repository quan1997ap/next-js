import type { AppProps } from 'next/app'
import Head from 'next/head';
import Link from 'next/link';

import variables from '../styles/module/variables.module.scss';
import header from '../styles/module/header.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <Link href="/about">
            <a className='header-link' style={{ color: variables.primaryColor }} >Go to about</a>
        </Link>
        <Link href="/post">
            <a className='header-link' style={{ color: variables.primaryColor }} >Go to post list</a>
        </Link>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
