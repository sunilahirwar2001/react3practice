// import React, { useEffect, useRef, useState } from 'react'

// const StopWatch = () => {

//  const startTime = useRef(0);
//  const intervalRef = useRef(0);
   
//     const [currentTime,setCurrentTime] = useState(0);
//     const [lap,setLap] = useState([]);
  
//      const formatTime=(time)=>{
//  return (time/1000).toFixed(3);
//      }
//      const handleStart=()=>{
//       startTime.current = Date.now() - currentTime;
//       intervalRef.current = setInterval(()=>{
//         setCurrentTime(Date.now()-startTime.current);
//       },10)

    
//        }

//      const handleStop=()=>{
//       clearInterval(intervalRef.current);
         


//      }



//             const handleLap=()=>{
//    const lapTime = formatTime(currentTime)
// setLap((prev)=>[...prev,lapTime]);
     

//      }
//      const   handleReset=()=>{

//     clearInterval(intervalRef.current);

//  setCurrentTime(0);

//  setLap([]);
  
  
//     }

    




//   return (
//     <div>
//       <section>
//         <h2>StopWatch:000000</h2>
//        <button onClick={handleStart}>Start:{formatTime(currentTime)}</button>
//        <button  onClick={handleStop} >Stop</button>
//        <button onClick={handleLap} >Lap</button>
//        <button onClick={handleReset}>Reset</button>
//        </section>

//        <ul>
//        {
//         lap.map((item)=>(
//             <li>{item}</li>
//         ))
//        }
//        </ul>

//     </div>
//   )
// }

// export default StopWatch

















import React, { useRef, useState } from 'react'
const StopWatch = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

 const formatTime = (time)=>{
  return (time/1000).toFixed(3);
 };
   
  const startTimer=()=>{
     startTime.current = Date.now()-currentTime;
     intervalRef.current = setInterval(() => {
      setCurrentTime(Date.now()-startTime.current);
      
     },10);
 
  }
  const stopTimer=()=>{
  clearInterval(intervalRef.current);

  };
  const addLap=()=>{
    
    const lapTime = formatTime(currentTime);
    setLaps((prevLaps)=>[...prevLaps,lapTime]);
    
  }

const resetTime=()=>{
 
  clearInterval(intervalRef.current);
  setCurrentTime(0);
  setLaps([]);


}
  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{formatTime(currentTime)}</h1>
        <section className='buttons'>
          <button className="start-btn" onClick={startTimer}>START</button>
          <button className="stop-btn" onClick={stopTimer}>STOP</button>
          <button className="lap-btn"  onClick={addLap}>LAP</button>
          <button className="reset-btn" onClick={resetTime}>RESET</button>
        </section>
      </section>
      {laps.length > 0 &&(

     
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
         {
          laps.map((lap,index)=>(
            <p key={index}>{lap}</p>
          ))
         }
        </section>
      </section>
       ) }
    </div>
  )
}


export default StopWatch;

