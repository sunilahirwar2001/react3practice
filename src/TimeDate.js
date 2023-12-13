// import React from 'react'

// const TimeDate = () => {

//     const dataShow = "Time and Data define in react"
//     const data = new Date().toLocaleDateString();
//     const time  = new Date().toLocaleTimeString();
//   return (
//     <div>
//       <h1>{dataShow}</h1>
//       <p>{data}</p>
//       <p>{time}</p>

//     </div>
//   )
// }

// export default TimeDate


//second and millisecond bhi chalayenge

// import React, { useEffect, useState } from 'react'

// const TimeDate = () => {
//     const [date,setDate] = useState();

//     useEffect(()=>{
//         setDate(new Date().toLocaleString());
//         const timerId =  setInterval(()=>{
//             setDate(new Date().toLocaleString());
//         },1000);
//         return ()=>clearInterval(timerId);

//     },[]);

//   return (
//     <div>
//         <h1>Hi</h1>
//       <h1>{date}</h1>
//     </div>
//   )
// }

// export default TimeDate



import React, { useEffect, useState } from 'react'

const TimeDate = () => {
  const [timeData,setTimeData] = useState(0);


    useEffect(()=>{
    

      
      const timeInterval = setInterval(()=>{
        setTimeData( new Date().toLocaleString());
      
  },1000)
  return ()=>clearInterval(timeInterval);

},[])

return(
  <>
  <p>{timeData}</p>
  </>

)

}
export default TimeDate