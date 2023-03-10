import Head from 'next/head'
import { Inter } from '@next/font/google'
import  Link from 'next/link';

import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Next RRL Tests</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <h1 className={styles.header}>NextJS RRL Tests</h1>

        <div className={styles.container}>
          <h2>Pillar Page Variants</h2>
          <Link href='pillar-csr'>CSR</Link>
          <Link href='pillar-ssg'>SSG</Link>
          <Link href='pillar-ssr'>SSR</Link>
        </div>

        <div className={styles.container}>
          <h2>Blog Page Variants</h2>
          <Link href='blog-csr'>CSR</Link>
          <Link href='blog-ssg'>SSG</Link>
          <Link href='blog-ssr'>SSR</Link>
        </div>
        
      </main>
    </>
  )
}
