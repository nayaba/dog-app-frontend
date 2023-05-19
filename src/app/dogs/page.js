'use client'

import styles from '../page.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch('https://arcane-bastion-92736.herokuapp.com/dogs')
      const retrievedDogs = await response.json()

      setDogs(retrievedDogs)
      console.log(retrievedDogs)
    }

    getDogs()
  }, [])

  return (
    <main className={styles.main}>
      <h1>Hello React</h1>
      <h3><Link href="/">Back to Home</Link></h3>
        { dogs.map( dog => (
          <Link href={`/dogs/${dog._id}`} key={dog._i}><h1>{ dog.name }</h1></Link>
        ))}
    </main>
  )
}
