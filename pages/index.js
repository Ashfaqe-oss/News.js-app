import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home () {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Created News App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">News.js !</a>
        </h1>

        <p className={styles.description}>
          Get Started by clicking any tab you Like
        </p>

        <div onClick={() => router.push('/')} className={styles.grid}>
          <div href="#" className={styles.card}>
            <h3> Home &rarr;</h3>
            <p>This is the Home page</p>
          </div>

          <div onClick={() => router.push('/feed/1')} className={styles.card}>
            <h3>Feed&rarr;</h3>
            <p>Get your Live Feed here</p>
          </div>

          <Link href="/Eom">
          <div onClick={() => router.push('/Eom')}
            href="#"
            className={styles.card}
          >
            <h3>Employee of the month &rarr;</h3>
            <p>Discover who is the Employee of the month</p>
            </div>
            </Link>

          <div 
            href="#"
            className={styles.card}
            onClick={() => window.location.href = 'https://twitter.com'}
          >
            <h3>Twitter &rarr;</h3>
            <p>
              Instantly get to the Twitter Feed of the Developer! Oops
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          
        </div>
        <h3>{" "}Ashfaqe</h3>
      </footer>
    </div>
  )
}

//git remote add origin https://github.com/Ashfaqe-oss/"name".git
//git branch -M main
//git push -u origin main