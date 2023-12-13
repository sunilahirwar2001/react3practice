// Pure Components in React


// import React,{memo, useState} from 'react'
 
// const MyPureFunctionComponent = memo( ({title,description})=> {
//     console.log('Rendering MyPureFunctionComponent');
// return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// ;
// });


//     const SimpleFile = () =>   {   
     
//     const [data,setData] = useState  ({
//         title:"React pure function component",
//         description:"this is a pure function component example ."
//     }) ;

//     const updateData=()=>{
//         setData({
//             title:"React pure function component",
//          description:"this is a pure function component example "
//         });
//     }   
//     console.log('Rendering App');
//   return (
//     <div>
//         <MyPureFunctionComponent   title={data.title}    description={data.description}  />
//             <button onClick={updateData}> Update Data </button>
//     </div>
//   )
// }
// export default SimpleFile;




// Import the React library
//    import React, { useState } from 'react';
// // // Define a functional component

//    function VirtualDOMExample() {
//   // Define a state variable using the useState hook
//   const [count, setCount] = useState(0);
//   // Event handler to update the count when the button is clicked
//   const handleButtonClick = () => {
//     // Update the count using the setCount function
//     setCount(count + 1);
//   };

//   // Render the component
//   return (
//     <div>
//       {/* Display the current count */}
//       <p>Count: {count}</p>

//       {/* Button to trigger a state change */}
//       <button onClick={handleButtonClick}>
//         Increment Count
//       </button>
//     </div>
//   );
// }

// export default VirtualDOMExample;



// Synthethic Events in reactjs

// import React from 'react';
// class MyComponent extends React.Component {
//   handleClick = (event) => {
//     // Synthetic event object
//     console.log('Button clicked!');
//     console.log('Event Type:', event.type); // Accessing event type from the synthetic event
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }
// export default MyComponent;

// import React, { useState } from 'react';

// const ControlledComponent = () => {
//   // Define a state variable to hold the input value
//   const [inputValue, setInputValue] = useState('');

//   // Event handler to update the state when the input changes
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

// //   return (
// //     <div>
// //       {/* Input field with value controlled by React state */}
// //       <input
// //         type="text"
// //         value={inputValue}
// //         onChange={handleInputChange}
// //       />

// //       {/* Display the current value */}
// //       <p>Current Value: {inputValue}</p>
// //     </div>
// //   );
// // };
// // export default ControlledComponent;




// import React, { useRef } from 'react';

// const UncontrolledComponent = () => {
//   // Create a ref to hold a reference to the input DOM element
//   const inputRef = useRef(null);

//   // Event handler to access the current value of the input using the ref
//   const handleButtonClick = () => {
//     // Access the current value of the input using the ref
//      console.log('Input Value: ' + inputRef.current.value);
//   };

//   return (
//     <div>
//       {/* Uncontrolled input field using a ref */}
//       <input type="text" ref={inputRef} />

//       {/* Button to trigger an action using the input value */}
//       <button onClick={handleButtonClick}>
//         Get Input Value
//       </button>
//     </div>
//   );
// };

// export default UncontrolledComponent;


// //High order Component 
// import React,{useState} from "react";
//  export default function App() {

//   return (
//     <div className="App">
//   <HOC  cmp={Counter}/>
//   <HOCBL  cmp={Counter}/>
//   <HOCGr cmp={Counter}/>
//     </div>
//   );
// }


// const  HOC=(props)=>{
// return(
//    <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>

// )

// }
// const  HOCBL=(props)=>{
//   return(
//      <h2 style={{backgroundColor:'blue',width:100}}>Blue<props.cmp /></h2>
  
//   )
  
//   }
//   const  HOCGr=(props)=>{
//     return(
//        <h2 style={{backgroundColor:'green',width:100}}>Green<props.cmp /></h2>
    
//     )
    
//     }
// const Counter=()=>{

//   const [data,setData]= useState(0);

 
//   const handleClick = () => {
//     // Use the functional form of setData to ensure proper updates
//     setData((prevData) => prevData + 1);
//   };
  

//    return(
//   <div>
//     <p>{data}</p>
//     <button onClick={handleClick}>Clcik</button>
//   </div>
// )
// }




// import React, { useEffect } from 'react';

// // Higher-Order Component (Custom Hook)
// const useLogger = (componentName) => {
//   useEffect(() => {
//     console.log(`Component ${componentName} is mounted`);

//     return () => {
//       console.log(`Component ${componentName} is unmounted`);
//     };
//   }, [componentName]);
// };

// // Component to be used with the HOC
// const MyComponent = ({ name }) => {
//   // Using the custom hook
//   useLogger('MyComponent');

//   return (
//     <div>
//       <p>Hello, {name}!</p>
//     </div>
//   );
// };

// // Using the component
// const App = () => {
//   // Using the component with the custom hook
//   useLogger('App');

//   return (
//     <div>
//       <MyComponent name="John" />
//     </div>
//   );
// };

// export default App;



// // User
// // stateless component ka code dedo

// // import React from 'react';

// // Stateless Functional Component
// const Greeting = ({ name }) => {
//   return (
//     <div>
//       <p>Hello, {name}!</p>
//     </div>
//   );
// };

// // import React from 'react';
// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <Greeting name="John" />
//     </div>
//   );
// };

//  export default App;


// import React, { Component } from 'react';

// // Stateful Class Component
// class Counter extends Component {
//   constructor(props) {
//     super(props);
    
//     // Initialize the state
//     this.state = {
//       count: 0,
//     };
//   }

//   // Method to increment the count
//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;



//Synthetic events in react 

// import React from 'react';

// class SyntheticEventExample extends React.Component {
//   // Event handler for the input change
//    handleInputChange = (event) => {
//     console.log('Input Value:', event.target.value);
//   };

//   // Event handler for the form submission
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Submitted!');
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>
//           {/* Input field with onChange event */}
//           <label>
//             Type something:
//             <input type="text" onChange={this.handleInputChange} />
//           </label>

//           {/* Submit button */}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SyntheticEventExample;


 // useEffect
 
// import React, { useState, useEffect } from 'react';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchPosts function
//     fetchPosts();

//     // Cleanup function (optional)
//     return () => {
//       console.log('Cleanup: Component is unmounted');
//     };
//   }, []); // Empty dependency array means it runs once after initial render

//   return (
//     <div>
//       <h1>Post List</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;


//UseCallBack  
//    import React, { useState, useCallback } from 'react';
//     const MemoizedComponent = () => { 
//     const [count, setCount] = useState(0);

//   // Normal function without useCallback
//    const handleClickWithoutCallback = () => {
//     console.log('Button clicked!');
//   };

//   // Memoized function with useCallback
//   const handleClickWithCallback = useCallback(() => {
//     console.log('Button clicked! Count:', count);
//   }, [count]); // Dependency array: function will be recreated only if count changes

//   return (
//     <div>
//       <p>Count: {count}</p>
      
//       {/* Button using normal function */}
//       <button onClick={handleClickWithoutCallback}>
//         Click (Without useCallback)
//       </button>
//       {/* Button using memoized function */}
//       <button onClick={handleClickWithCallback}>
//         Click (With useCallback)
//       </button>

//       {/* Button to update count */}
//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>
//     </div>
//   );
// };

// export default MemoizedComponent;


//Memoization in reactjs 

import React, { useState, useMemo } from 'react';

const SumComponent = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // Memoized sum calculation
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return number1 + number2;
  }, [number1, number2]);

  return (
    <div>
      <h1>Sum Component</h1>
      <label>
        Enter Number 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
      </label>

      <br />

      <label>
        Enter Number 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </label>

      <br />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumComponent;




































// import React,{memo, useState} from "react";
// const MyPureComponent =memo(({title})=> {
//    console.log("PureFunction rendering in react js");
   
//  return(
//   <div>
//     <p>{title}</p>
//   </div>
//  )

// });




// export default function App() {
//   const[data,setData]= useState({
//     title:"hello pure Function"
//   })
//   const handleCLick=()=>{
//     setData({
//       title:"Update Function COmponent"
//     })
//   }
//   console.log("rendering app");
//   return (
//     <div className="App">
//  <h1>hello</h1>
//  <MyPureComponent title={data.title} />
//   <button onClick={handleCLick}>Click</button>
//     </div>
//   );
// }



//useCallback 
// import React, { useCallback, useState } from "react";
  
// export default function App() {
//  const[count,setCount] = useState(0);
  
//  const handleWithOutClaaback=()=>{
//   console.log("Without callback Function");
// }
// const handleWithClaaback= useCallback(()=>{
//   console.log("With callback Function"+count);
// },[count])
// const IncrementCount=()=>{
//  setCount(count+1);
// }
// return(
//   <div>
//     <p>{count}</p>
//     <button onClick={handleWithOutClaaback}>Clcik </button>
//     <button onClick={handleWithClaaback}>WithCallback</button>
//     <button onClick={IncrementCount}>IncrementWithCount</button>
//   </div>
// )


// }


// import React, { useState, useCallback } from 'react';

// const MemoizedComponent = () => {
//   const [count, setCount] = useState(0);

//   // Normal function without useCallback
//   const handleClickWithoutCallback = () => {
//     console.log('Button clicked!');
//   };

//   // Memoized function with useCallback
//   const handleClickWithCallback = useCallback(() => {
//     console.log('Button clicked! Count:', count);
//   }, [count]); // Dependency array: function will be recreated only if count changes

//   return (
//     <div>
//       <p>Count: {count}</p>
      
//       {/* Button using normal function */}
//       <button onClick={handleClickWithoutCallback}>
//         Click (Without useCallback)
//       </button>

//       {/* Button using memoized function */}
//       <button onClick={handleClickWithCallback}>
//         Click (With useCallback)
//       </button>

//       {/* Button to update count */}
//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>
//     </div>
//   );
// };

// export default MemoizedComponent;




// import React, {useMemo,useState } from "react";
//  export default function App() {
//    const [num1,setNum1]=useState(0);
//    const [num2,setNum2]=useState(0);

//    const sum = useMemo(()=> {
//     console.log("Count is count");
//       return num1+num2;
 
//    },[num1,num2])
//    return (
//   <div>
//     <input  type = 'number'
//     value={num1}
//     onChange={(e)=>setNum1(Number(e.target.value))}
//      placeholder="Enter your number1"/>
//     <input type = 'number'
//     value={num2}
//     onChange={(e)=>setNum2(Number(e.target.value))}

//      placeholder="Enter your number2"/>
// <p>{sum}</p>
//   </div>
// )


// }

        

// import React,{ useEffect } from "react";

//    const useLogger = (componentName)=> {

//     useEffect(()=> {

//  console.log(`Component ${componentName} is mounted`);
//   return()=> {
// console.log(`Component ${componentName} is Unmounted`);
//  }

// },[componentName]);
// };

// const MyComponent =({name})=>{

//   useLogger('MyComponent');
//   return(
//     <div>
//        <p>Hi..{name}</p>
//     </div>
//   )

// }

// export default function App() {
//   useLogger("App")
//    return(
//   <div> 
//    <MyComponent name='John'/>
// </div>
// )
// }



// import React, { useState, useEffect } from 'react';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchPosts function
//     fetchPosts();

//     // Cleanup function (optional)
//     return () => {
//       console.log('Cleanup: Component is unmounted');
//     };
//   }, []); // Empty dependency array means it runs once after initial render

//   return (
//     <div>
//       <h1>Post List</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;



  

// import React from 'react'
//  const SimpleFile = () => {
//   const handleSubmit=(event)=>{
//     event.preventDefault();
//     console.log('Form Submitted!');
//   }
//   const  handleClick=(event)=>{
//     console.log('Input Value:', event.target.value)
//   }
//   return (
//     <div>
//           <form onSubmit={handleSubmit}>
//       <input type='text' onClick={handleClick}/>
//         <button  type='submit'>Click</button>

//       </form>
//     </div>
//   )
// }
// export default SimpleFile














