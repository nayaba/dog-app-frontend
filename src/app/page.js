'use client'

import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <main className={styles.main}>
      <h1>Hello React</h1>
    <Link href="/dogs">On to the dogs!!</Link>
    </main>
  )
}
