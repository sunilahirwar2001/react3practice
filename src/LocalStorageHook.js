import React, { useState } from 'react'

const LocalStorageHook = () => {

const [state,setState]= useState('');
const [itemAdd,setItemAdd] = useState('');

 
const handleChange=(e)=>{
setState(e.target.value);

}

// const handleClick=()=>{
//     const save = localStorage.setItem('Name',state);
//   const data =   setState((prev)=>[prev,save]);
// setItemAdd(data)

// }
const handleClick = () => {
  const oldState = localStorage.getItem('Name'); // Get the old value from local storage
  localStorage.setItem('Name', state); // Save the new value to local storage
  setState((prev) => {
    return [prev, state]; // Store both old and new values in an array
  });
  setItemAdd(oldState ? `${oldState} (old), ${state} (new)` : state);
}



  return (
    <div>
        <h1>Hi..</h1>
        <input type='text' onChange={handleChange}/>
<button onClick={handleClick} >Click</button>
<p>Saved value: {itemAdd}</p>
    
    </div>
  )
}

export default LocalStorageHook
