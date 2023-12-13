import React from 'react'

const Card = (props) => {
  console.log(props);

  return(
  <div className='cards'>
  <div className='card'>
    <img 
    src={props.imgsrc} 
    width='300px' height='200px'
    alt ='mypic'
    className='card_img'
/>
<div className='carf_info'>
  <span className='card_category'>{props.title}</span>
  <h3>{props.sname}</h3>
  <a href={props.link}></a>
</div>
<button>Watch now</button>
    

  </div>

  



</div>
)
  }

export default Card
