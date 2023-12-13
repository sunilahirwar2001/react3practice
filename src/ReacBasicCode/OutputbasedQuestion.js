
//import React,{useState} from "react";

//    function OutputbasedQuestion() {
//       let [state, setState] = React.useState(0);
//         React.useEffect(() => {
//         setState(5);
        
//       }, []);
//       return <div>{state}</div>;
//     }
//     export default OutputbasedQuestion

    // function OutputbasedQuestion() {
    //   const [count, setCount] = React.useState(0);
    //   React.useEffect(() => {
    //     setCount(prev => prev + 1);
    //   }, [count]);
    //   return <div>{count}</div>;
    // }
    // export default OutputbasedQuestion;



// import React from "react";
// import { defaultMethod } from "react-router-dom/dist/dom";

    // function OutputbasedQuestion()  {
    //  const renderCount = React.useRef(0);
    // renderCount.current += 1;
    // return <div>Renders: {renderCount.current}</div>;

    //   }
    // export default OutputbasedQuestion;


    // function OutputbasedQuestion () {
    //   const [values, setValues] = React.useState(['A', 'B']);
    //    const updateValues = () => setValues(['A']);
    //     React.useEffect(updateValues, []);
    //     return <div> {values.length} </div>;
    //   }
    //   export default OutputbasedQuestion;
      

    // function OutputbasedQuestio() {
    //     const [state, setState] = React.useState(true);
    //     const value = state ? 'First' : 'Second';
    //     React.useEffect(() => {
    //       setState(false);
    //     }, [value]);
    //     return <div>{value}</div>;
    //   }
    //   export default OutputbasedQuestio


  //   function OutputbasedQuestion() {
  //       const [show, setShow] = React.useState(true);
  //       return (
  //         <div>
  //           {show && <Child />}
  //           <button onClick={() => setShow(prev => !prev)}>Toggle</button>
  //         </div>
  //       );
  //     }
  // export default    OutputbasedQuestion
  //     function Child() {
  //       React.useEffect(() => {
  //         return () => console.log("Unmounted");
  //       }, []);
  //       return <div>Child</div>;
  //     }
      
    //   export default Parent






     import React,{Context} from "react";
    function OutputbasedQuestion() {
        const [count, setCount] = React.useState(0);
        React.useEffect(() => {
          if (count <5) {
            setCount(count + 1);
          }
        }, [count]);
        return <div>{count}</div>;
      }
      export default OutputbasedQuestion


    // function Parent() {
    //     const renderCount = React.useRef(0);
    //     renderCount.current++;
    //     return <Child count={renderCount.current} />;
    //   }
      
    //   function Child({ count }) {
    //     return <div>Rendered: {count} times</div>;
    //   }
    //   export default Parent


      //  function App() {
         
      //    const [count, setCount] = React.useState(5);
      
      //   return (
      //     <Context.Provider value={count}>
      //       <Child />
      //     </Context.Provider>
      //   );
      // }
      
      // function Child() {
      //   const contextValue = React.useContext(Context);
      //   return <div>{contextValue + 1}</div>;
      // }
      // export default App;