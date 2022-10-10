import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ninjas.module.css'

// Runs only at build time
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      ninjas: data
    }
  }
}

export default function Ninjas({ ninjas }) {
  return (
    <div>
      <Head>
        <title>Ninjas List</title>
      </Head>
      <h1>Ninjas List</h1>
      {
        ninjas.map((ninja) => (
          <div className={styles.single} key={ninja.id}>
            <Link href={`/ninjas/${ninja.id}`}>
              <a>{ ninja.name }</a>
            </Link>       
          </div>
        ))
      }
    </div>
  )
}
