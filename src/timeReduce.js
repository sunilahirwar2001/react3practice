// const formatTime = (time) => {
//     return (time / 1000).toFixed(4);
//   };

// const timeReduce = (state,action) => {
//     switch(action.type){
//         case "startTimer":
//         return {    ...state,
//             input:{
//                 ...state.input,
//                 startTime:Date.now(),
//                 intervalRef:setInterval(()=>{},10),
//                 currentTime:Date.now(),
                 
//             }




//         }

//         case 'stopTimer':
//          clearInterval(state.input.intervalRef);    
//          return{
//             ...state,
//             input:{
//                 ...state.input,
//                 intervalRef:"",
//             }
//          }
//          case 'LapTime':
//             return {
//                 ...state,
//                 input:{
//                    ...state.input,
//                    lapTime:[...state.input.lapTime,formatTime(state.input.currentTime)]
//                 }
//             }
//             case 'resetTime':
//                 return{
//                     ...state,
//                     input:{
//                         ...state.input,
//                         startTime:'',
//                         intervalRef:"",
//                         currentTime:"",
//                         lapTime:[],
//                     }
//                 }
//                 default:
//                     return state;
//     }
// }   
// export default timeReduce;
 
import React from 'react';
import { dispatch } from 'react';
const formatTime = (time) => {
  return (time / 1000).toFixed(4);
};

const timeReduce = (state, action) => {
  switch (action.type) {
    case 'startTimer':
      if (!state.input.intervalRef) {
        const startTime = Date.now();
        const intervalRef = setInterval(() => {
          const currentTime = Date.now() - startTime;
          dispatch({ type: 'updateTime', payload: { currentTime } });
        }, 10);

        return {
          ...state,
          input: {
            ...state.input,
            startTime,
            intervalRef,
          },
        };
      }
      return state;
    case 'stopTimer':
      clearInterval(state.input.intervalRef);
      return {
        ...state,
        input: {
          ...state.input,
          intervalRef: null,
        },
      };
    case 'resetTimer':
      clearInterval(state.input.intervalRef);
      return {
        ...state,
        input: {
          ...state.input,
          startTime: null,
          intervalRef: null,
          currentTime: 0,
          lapTimes: [],
        },
      };
    case 'addLap':
      if (state.input.startTime !== null) {
        const lapTime = formatTime(state.input.currentTime);
        return {
          ...state,
          input: {
            ...state.input,
            lapTimes: [...state.input.lapTimes, lapTime],
          },
        };
      }
      return state;
    case 'updateTime':
      return {
        ...state,
        input: {
          ...state.input,
          currentTime: action.payload.currentTime,
        },
      };
    default:
      return state;
  }
};

export default timeReduce;
