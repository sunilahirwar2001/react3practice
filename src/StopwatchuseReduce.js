// import React, { useReducer } from 'react'
// import timeReduce from './timeReduce';

// const initailFormState = {
//   input:{
//    startTime:"",
//    intervalRef:"",
//    currentTime:"",
//    lapTime:[],
//   }
// }




// const StopwatchuseReduce = () => {
  
//  const[formState,dispatch] = useReducer(timeReduce ,initailFormState);

//  const formatTime =(time)=>{
    
// return (time/1000).toFixed(2);
//  }
//  const handleLap = () => {
//   dispatch({ type: "LapTime" });
// };

//   return (
//     <div>

// <h1>ShowData:{formatTime(formState.input.currentTime)}</h1>
//         <button onClick={()=>dispatch({type:"startTimer"})}>Start</button>
//          <button onClick={()=>dispatch({type:"stopTimer"})} >Stop</button>
//         <button onClick={handleLap}>Lap</button>
//         <button onClick={()=>dispatch({type:"resetTime"})}>Reset</button>
     
//      <ul>{
//       formState.input.lapTime.map((item)=>{
//         return <li>{item}</li>

//       })
// }</ul>
      
//     </div>
//   )
// }

// export default StopwatchuseReduce



import React, { useReducer,useEffect } from 'react';
import timeReduce from './timeReduce';

const initailFormState = {
  input: {
    startTime: null,
    intervalRef: null,
    currentTime: 0,
    lapTimes: [],
  },
};

const StopwatchuseReduce = () => {
  const [formState, dispatch] = useReducer(timeReduce, initailFormState);

  const formatTime = (time) => {
    return (time / 1000).toFixed(2);
  };

  const handleStart = () => {
    dispatch({ type: 'startTimer' });
  };

  const handleStop = () => {
    dispatch({ type: 'stopTimer' });
  };

  const handleReset = () => {
    dispatch({ type: 'resetTimer' });
  };

  const handleLap = () => {
    dispatch({ type: 'addLap' });
  };

  return (
    <div>
      <h1>ShowData: {formatTime(formState.input.currentTime)}</h1>
      <button onClick={handleStart} disabled={formState.input.intervalRef !== null}>
        Start
      </button>
      <button onClick={handleStop} disabled={formState.input.intervalRef === null}>
        Stop
      </button>
      <button onClick={handleLap} disabled={formState.input.startTime === null}>
        Lap
      </button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {formState.input.lapTimes.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default StopwatchuseReduce;













