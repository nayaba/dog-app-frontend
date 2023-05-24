'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Dog({ params }) {
  const [dog, setDog] = useState({})

  const router = useRouter()

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

  const removeDog = async () => {
    const response = await fetch(`https://arcane-bastion-92736.herokuapp.com/dogs/${params.id}`, {
      headers: {'Content-Type': 'application/json'},
      method: 'DELETE'
    })
    const adoptedDog = await response.json()

    if(adoptedDog) {
      router.push('/dogs')
    }
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <h1>{dog.age}</h1>

      <button onClick={removeDog}>Remove Dog</button>
    </div>
  )
}
