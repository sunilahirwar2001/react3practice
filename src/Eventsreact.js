import React, { useState } from 'react'

const Eventsreact = () => {
    const purple = '#8e44ad'
const [bg,setBg] = useState(purple);
const [name,setName] = useState();
    
    const bgchange =()=>{
        let newBg = '#34495e'
    setBg(newBg)
        console.log("clicked");
        setName("Ouchh ");
      }
      const bgBack=()=>{

      setName("Ayyyo")

      }


  return (
    <div>
        <p>Event handle</p>
        <button style={{backgroundColor:bg}} onClick={bgchange} 
         onDoubleClick={bgBack}
        
        >{name}</button>
      
    </div>
  )
}

export default Eventsreact
