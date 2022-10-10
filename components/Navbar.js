import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image src="/bayc-logo.png" height={50} width={50} alt='monkey'/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  )
}
