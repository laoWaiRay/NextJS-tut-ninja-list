import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000)
  }, [router]);

  return (
    <div className='notFound'>
      <h1>404 Not Found</h1>
      <div className={`${styles.image} mb-4`}>
        <Image 
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/t-rex.max-1000x1000.png"
          height="400px"
          width="400px"
          alt="Uh oh 404"
        />
      </div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      </div>
  )
}
