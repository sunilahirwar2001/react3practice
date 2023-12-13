import React, { useState } from 'react'


const AddingListItem = () => {
   const[name,setName]= useState('');
   const [list,setList] = useState([]);
 const handLeCLick =(e)=>{
  setName(e.target.value);
   }
   const handleAdd=()=>{
    const  store =  name.trim();
    if(store!== '')  {
      setList((prev)=>[...prev,store]);
    }
  setName(" ");

   }
//    const deleteClick = (id) =>{
//     const copyTask = [...name]
// copyTask.splice(id,1);
// setList(copyTask);
  
//   }
const deleteClick = (item) =>  {
  const copyTask = [...list];
  const index = copyTask.indexOf(item);
  if (index !== -1) {
    copyTask.splice(index, 1);
    setList(copyTask);
  }
}

  return (
    <div>

      <h1>Hello</h1>
      <input type='text' onChange={handLeCLick} value={name} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={deleteClick}>Delete</button>
      <ul>
        {
          list.map((item)=>(
            <>
            <li>{item}</li>
            </>
          ))
        }
      </ul>
    </div>
  )
}

export default AddingListItem
