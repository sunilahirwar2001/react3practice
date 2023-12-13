 // START STOP RESET
// import React, { useState, useEffect } from 'react';

//   const TimerchatgptSunil = () => {
//     const [startTimer, setStartTimer] = useState(0);
//     const [stopTimer, setStopTimer] = useState(true);

//   useEffect(() => {
//     let timer;
//     if (!stopTimer) {
//       timer = setInterval(() => {
//         setStartTimer((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => {

//       clearInterval(timer);
//     };
//   }, [stopTimer]);

//   const handleStart = () => {
//     setStopTimer(false);
//   };

//   const handleStop = () => {
//       setStopTimer(true);
//   };
//  const handleReset = () => {
//     setStartTimer(0);
//     setStopTimer(true);
//   };
//   return (
//     <div style={{ font: 'bold', textAlign: 'center', textDecoration: 'white' }}>
//       <h1>{startTimer}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

//  export default TimerchatgptSunil;



//COUNTDOWN TIMER 

// import React, { useState, useEffect } from 'react';

//   const TimerchatgptSunil = () => {
//     const [startTimer, setStartTimer] = useState(0);
//     const [stopTimer, setStopTimer] = useState(true);

//   useEffect(() => {
//     let timer;
//     if (!stopTimer) {
//       timer = setInterval(() => {
//         setStartTimer((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => {

//       clearInterval(timer);
//     };
//   }, [stopTimer]);


//   const handleStart = () => {
//     setStopTimer(false);
//   };

//   const handleStop = () => {
//       setStopTimer(true);
//   };
//  const handleReset = () => {
//     setStartTimer(0);
//     setStopTimer(true);
//   };
//          const formatTime=(timerinMiliSeconds)=>{
//      const hour = Math.floor(timerinMiliSeconds/3600);
//      const minute = Math.floor(timerinMiliSeconds%3600)/60;
//       const second = Math.floor(timerinMiliSeconds%60);
               
// const formatHours = hour<10 ?`)${hour}`:hour;
// const formatMinute = minute<10 ?`)${minute}`:minute;
// const formatSecond = minute<10 ?`)${second}`:second;
// return `${formatHours}:${formatMinute}:${formatSecond}`;
//  return `${formatHours}:parent`
//          }
        
//   return (
//     <div style={{ font: 'bold', textAlign: 'center', textDecoration: 'white' }}>
//       <h1>{formatTime}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default TimerchatgptSunil;






// import React, { useState, useEffect } from 'react';

// const TimerchatgptSunil = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [laps, setLaps] = useState([]);

//   useEffect(() => {
//     let timer;

//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   }, [isRunning]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   const handleReset = () => {
//     setTime(0);
//     setIsRunning(false);
//     setLaps([]);
//   };

//   const handleLap = () => {
//     setLaps((prevLaps) => [...prevLaps, time]);
//   };

//   const formatTime = (timeInSeconds) => {
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = timeInSeconds % 60;

//     const formattedHours = hours < 10 ? `0${hours}` : hours;
//     const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//     const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
//   };

//   return (
//     <div style={{ font: 'bold', textAlign: 'center', textDecoration: 'white' }}>
//       <h1>{formatTime(time)}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//       <button onClick={handleReset}>Reset</button>
//       <button onClick={handleLap}>Lap</button>

//       <ul>
//         {laps.map((lapTime, index) => (
//           <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//  export default TimerchatgptSunil;
 





//my Hand COde Mere hatho se rikha practice kiua huna//
import React,{ useEffect, useState } from "react";
export default function App() {
  const [start,setStart]= useState(0);
  const [stop,setStop] = useState(true);
  const[lap,setLap] = useState([]);
    
  useEffect(()=>{
    let timer;
    if(!stop){
    timer = setInterval(()=>{
      setStart((prev)=>prev+1);
     },1000)
    }
     return()=>clearInterval(timer);
  },[stop])
 const handleStart=()=>{
  setStop(false);
 }
 const handleStop=()=>{
  setStop(true)
 }
 const handleReset=()=>{
 setStart(0);
 setStop(true);
 setLap([]);
 } 
 const handleLap=()=>{
  setLap((prev)=>[...prev,start])

 
  } 
 const formatTime=(timeinMillisecond)=>{
  const hour = Math.floor(timeinMillisecond/3600);
  const minute= Math.floor((timeinMillisecond%3600)/60);
  const second = timeinMillisecond%60;
   const formatHour = hour<10 ?  `0${hour}`:hour;
   const formatMinute = minute <10 ? `0${minute}`:minute;
   const formatSecond= second<10 ? `0${second}`:second;
   return `${formatHour} :${formatMinute} : ${formatSecond}`

 } 
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{formatTime (start)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      <ul>
         {lap.map((lapTime, index) => (  
                  <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
     
   ))}
      </ul>
    </div>
  );
}