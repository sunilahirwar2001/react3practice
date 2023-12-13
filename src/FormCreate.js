import React, { useState } from 'react'

const FormCreate = () => {


 const [data,setData]= useState('');
 const [fullName,setFullName] = useState();
 const[lastName,setLastName] = useState('');
    const handNameChangre=(event)=>{
        // console.log(event.target.value)
        // setData(event.target.value);
        setData(event.target.value);
        
       

    }
    const handleClick=()=>{
        setFullName(data);
     

    }
    const lastNameChange=(event)=>{
        setLastName(event.target.value)
    }
    const submitForm=(event)=>{
        event.preventDefault();
        setFullName(data);
        setLastName(lastName)
       
    }
  return (
    <div>
        <form onSubmit={submitForm}>
      <h1>Hello:{fullName} {lastName} </h1>
      <input type='text' placeholder='Enter your name'
    onChange={handNameChangre}
    value={data}
      />
      <input type='text' placeholder='Enter your name'
    onChange={lastNameChange}
    value={lastName}
      />
      <button onClick={handleClick} type='submit'>Click</button>
      </form>
    </div>
  )
}

export default FormCreate
