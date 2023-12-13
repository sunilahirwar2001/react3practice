import React from 'react'

const InlineUses = () => {
    const morning = new Date(2023,7,5,9);
    const afternon = new Date(2023,7,5,14);
    const night = new Date(2023,7,5,20);
  return (
    <div>
        <p>{morning}</p>
        <p>{afternon}</p>
      
        <p>{night}</p>
      
    </div>
  )
}

export default InlineUses
