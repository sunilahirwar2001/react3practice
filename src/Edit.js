import React, { useState } from 'react'
import PropsUsedEdit from './PropsUsedEdit';
const Edit = () => {
 const[name,setName] = useState('');
 const [item,setItem] = useState([]);


 const handleChange=(event)=>{
    setName(event.target.value);
  



 }
//  const handleDelete =(index)=>{

//     setItem((...oldItems)=>{
//         const data = [...oldItems];
//         data.splice(index,1);
//         return data;
//     })
//  }
 


 const handleClick=(e)=>{
    // const newItem = [...item,name];
    // setItem(newItem);
    // setName('');
e.preventDefault();
    setItem((oldItems)=>{
        return [ ...oldItems,name];
    })

  

 }
 const deleteItem=(id)=>{

    setItem((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{

            return index !== id;
        })
    })
    console.log('delted');
} 


  return (
    <div>
        <h1>hi</h1>
        <input type='text' placeholder='Enter your name'
        value={name}
        onChange={handleChange}/>
        <ol>
        {
            item.map((itemval,index)=>{
                // return <li key={index}>{item}
                return <li> <PropsUsedEdit
                
                key={index} id = {index}
          onSelect = {deleteItem}

                text={itemval} />
       </li>
            })
        }
        </ol>
      
        <button onClick={handleClick}
        >button</button>
      
    </div>
  )
}

export default Edit
