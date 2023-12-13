import React from 'react'

const PropsUsedEdit = (props) => {

 
    
  return (
    <div>
        <lo>
            <li>{props.text}</li>
            <button onClick={props.onSelect(props.id)}>button</button>
        </lo>
        

      
    </div>
  )
}

export default PropsUsedEdit
