import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const MaterialULUses = () => {
    const [item,setItem] = useState('');
     const [newItem,setNewItem] = useState([]);
 
  
     const itemEvent=(event)=>{
  setItem(event.target.value);

    }
    const handleClick=(e)=>{
       e.preventDefault();
        setNewItem((prevValue)=>{
    return   [...prevValue,item];
        })
    }
 
    const deleteCLick=(index)=>{
      setNewItem((oldVaklue)=>{
    return    [...oldVaklue].splice(index,0);
      })

    

    }


    return (
    <div>
      <div className  ='main_div'>
        <div className='center_div'>
            <br/>
            <h1>Todo List</h1>
            <input type='text'  placeholder='add  an item'
          onChange={itemEvent}  value={item} />
            <Button onClick ={handleClick}>Add Item</Button>
            
       <ul>
        {

            newItem.map((product,index)=>(
        <> 
 <li key={index}>{product}</li>
  <DeleteIcon onClick={deleteCLick}>delete</DeleteIcon>
</>   
            ))
}
       </ul>
        </div>

      </div>
    </div>
  )
}

export default MaterialULUses
