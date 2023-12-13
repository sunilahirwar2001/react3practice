// import React, { Component, useState, useEffect } from "react";


// const CountDownTimer = () => {
//   // write your code here 

// const [count,setCount] = useState(0);


//   useEffect(()=>{
//     let timer = null;
//     if(count>0){
//        timer = setInterval(()=>{

       
//         setCount((prev)=>[prev-1]);
   
    
//     },1000)
// }
// return ()=>clearInterval(timer);

//      },[count]);
 


// const handleKeyDown=(e)=>{
//     // if(e.key === 'Enter'){
//     //     const input = setCount(e.target.value);
          
//     //     const data  =  count ? input:"0";
//     //     return data
//     // }
//     if (e.key === "Enter") {
//         const input = parseInt(e.target.value);
//         const countValue = Number.isInteger(input) ? Math.floor(input) : 0;
//         setCount(countValue);

//  }
// }


//   return (
//     <div className="wrapper">
//       <div id="whole-center">
//         <h1>
//           Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
//         </h1>
//       </div>
//       <div id="current-time">Time: {count}</div>
//     </div>
//   )
// }


// export default CountDownTimer;






 import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
 const [data,setData] = useState(0);
     
 useEffect(()=>{
  let timeid =null;
  if(data>0){
     timeid= setInterval(()=>{
 setData((prev)=>[prev-1])
   },1000)
  }
  return ()=>clearInterval(timeid);
 },[data])

 const handleChange = (e) => {
  const countValue = parseInt(e.target.value);

  if (!isNaN(countValue)) {
    setData(Math.floor(countValue));
  }
};

//            const   handleChange=(e)=>{
//     if(e.key === 'Enter'){
//       const input = setData(e.target.value);
          
//               const data  =  data ? input:"0";
//               return data

//     }
//     if(e.key === 'Enter'){
//       const input = parseInt(e.target.value);
//       const countValue = Number.isInteger(input) ? Math.floor(input) : 0;
//       setData(countValue);


//            }
// }
  


 


  return (
    <div>
      <h1>Count Down:{data}</h1>
      <input type='number' id='number' 
      onKeyDown={handleChange}/>  
    </div>
  )
}

export default CountDownTimer
