import React from 'react'

const DisplayData = ({item}) => {
  return (
    <div>
       <p>{item.img}</p>
       <p>{item.title}</p>

    </div>
  )
}

export default DisplayData
