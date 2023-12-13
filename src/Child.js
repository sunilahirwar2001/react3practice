import React, { useContext } from 'react'
import { data,data1 } from './App'
const Child = () => {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <div>
      <h1>{name.name}</h1>
      <h1>{gender.gender}</h1>
    </div>
  )
}

export default Child
