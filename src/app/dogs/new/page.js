'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NewDogForm() {
  const [newDog, setNewDog] = useState({name: "", age: 0})

  const router = useRouter()

  const handleChange = (evt) => {
    setNewDog({...newDog, [evt.target.id]: evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const response = await fetch('https://arcane-bastion-92736.herokuapp.com/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDog),
    })
    const dog = await response.json()

    if (dog) {
      router.push('/dogs')
    }
  }

  return (
    <div>
      <h1>New Dog Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:
        <input type="text" name="name" id="name" onChange={handleChange}/>
        </label>
        <label htmlFor="age">Age:
        <input type="number" name="age" id="age" onChange={handleChange}/>
        </label>
        <input type="submit" value="Create Dog" />
      </form>
    </div>
  )
}
