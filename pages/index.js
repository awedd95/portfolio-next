import {Typography} from '@material-ui/core'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aaron Wedd - Developer</title>
        <meta name="description" content="Welcome to my portfolio, I'm a developer based in Sydney Australia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3">Aaron Wedd</Typography>
        <Typography variant="h4">Developer</Typography>
      </main>

    </div>
  )
}
