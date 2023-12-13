import React, { useState } from 'react'

const MyAccordian = ({question,answer}) => {
  const [show,setShow] = useState(false);

  const toggleAnswer = () => {
    setShow(!show);
  };

  return (
    <>
    <div>
   
      
      <h1>{question}</h1>
      <p onClick={toggleAnswer}>{show ? '-' : '+'}</p>
     
    </div>
  {show && <p className='answer' > {answer}</p>}
    </>
  )
}

export default MyAccordian
