import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae corporis nobis sequi sed sint inventore blanditiis impedit reprehenderit quidem similique, asperiores recusandae autem non numquam accusamus rem, exercitationem voluptatum.
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </div>
  )
}
