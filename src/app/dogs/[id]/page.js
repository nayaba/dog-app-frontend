'use client'

import { useState, useEffect } from 'react'

export default function Dog({ params }) {
  const [dog, setDog] = useState({})

  useEffect(() => {
    const getDog = async () => {
      const response = await fetch(
        `https://arcane-bastion-92736.herokuapp.com/dogs/${params.id}`
      )
      const retrievedDog = await response.json()

      setDog(retrievedDog)
    }

    getDog()
  }, [params.id])

  return (
    <div>
      <h1>{dog.name}</h1>
      <h1>{dog.age}</h1>
    </div>
  )
}
