// // import React, { useState } from "react";


// // export default function App() {
// //   const [state, setState] = useState({
// //     email: "",
// //     password: ""
// //   });

// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     setState((prevProps) => ({
// //       ...prevProps,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     console.log(state);
// //   };

// //   return (
// //     <div className="App">
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-control">
// //           <label>Email</label>
// //           <input
// //             type="text"
// //             name="email"
// //             value={state.email}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <div className="form-control">
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={state.password}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <div className="form-control">
// //           <label></label>
// //           <button type="submit">Login</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }
// // import React from 'react';
// // function App() {
// //   const fun = () => {

// //     console.log("button clicked");

// //   };
// //   function myFunction() {
// //     console.log("hii");
// //     <button onClick={fun}>Your Watchlist  </button>
// //   }
// //   let result = fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
// //     // operation.json();
// //     //console.log(operation.json());
// //     .then(response => response.json())

// //     .then(json => console.log(json));
// //   console.log(result)


// //   let btn = document.getElementsByClassName("searchlist");
// //   return (

// //     <>
// //       <div id="root"></div>
// //       <div class="container">

// //         <h1><i class="fa-solid fa-arrow-up"></i>Stock Market Dashboard   <i class="fa-solid fa-arrow-down"></i></h1>
// //         <input type="text" class="search" id="search" placeholder="Search for symbool" min="0" max='9' />
// //         <span><i id='change' class="fa-sharp fa-solid fa-magnifying-glass"></i></span>
// //       </div>
// //       <div id="btn">

// //         <button>INTRADAY</button>
// //         <button>DAILY</button>

// //       </div>
// //       <span id="check">

// //         <button>WEEKLY</button>
// //         <button onClick={fun}>MONTHLY</button>

// //       </span>
// //       <h4> <span>123.45</span> <button>WEEKLY</button><i class="fa-sharp fa-solid fa-circle-xmark"></i></h4>

// //       <h4> MS     <span>123.45</span> <button>DAILY</button> <i class="fa-sharp fa-solid fa-circle-xmark"></i></h4>
// //       <h4> IBM     <span>123.45</span> <button>WEEKLY</button><i class="fa-sharp fa-solid fa-circle-xmark"></i></h4>

// //     </>
// //   )
// // }


// // // btn.addEventListener("Click").innerText
// // // }





// // export default App;







// import React, { useState } from 'react'
// import './App.css';
// const App = () => {

//   const [formFields, setFormFields] = useState ({
//     username: "",
//     email: "",
//     password: "",
//     contactNo: ""
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormFields({...formFields, [name]: value});
//   }

//   function validateForm(inputValues) {
//     const errors = {};

//     if (!inputValues.username) {
//       errors.username = "Username is required";
//     }

//     if (!inputValues.email) {
//       errors.email = "Email is required";
//     }

//     if (!inputValues.password) {
//       errors.password = "Password is required";
//     } else if (inputValues.password.length < 4) {
//       errors.password = "Password must have more than 4 characters";
//     }
    
//     if (!inputValues.contactNo) {
//       errors.contactNo = "Contact no. is required";
//     } else if (inputValues.contactNo.length !== 10) {
//       errors.contactNo = "Invalid contact no.";
//     }

//     return errors;
//   }

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     setFormErrors(validateForm(formFields));
//     setIsFormSubmitted(true);
//     setFormFields({
//       username: "",
//       email: "",
//       password: "",
//       contactNo: ""
//     })
//   }

//   return (
//     <div id="main">
//       {Object.keys(formErrors).length === 0 && isFormSubmitted ? <h3 className='success-alert'>Registered Successfullly</h3> : null}
//       <form onSubmit={handleFormSubmit}>
//         <h1>Registeration Form</h1>
//         <section>
//           <label>Username</label>
//           <input type="text" name='username' value={formFields.username} onChange={handleInputChange} />
//           {formErrors.username && <p className='username-error'>{formErrors.username}</p>}
//           <label>Email</label>
//           <input type="email" name='email' value={formFields.email} onChange={handleInputChange} />
//           {formErrors.email && <p className='email-error'>{formErrors.email}</p>}
//           <label>Password</label>
//           <input type="password" name='password' value={formFields.password} onChange={handleInputChange} />
//           {formErrors.password && <p className='password-error'>{formErrors.password}</p>}
//           <label>Contact Number</label>
//           <input type="number" name='contactNo' value={formFields.contactNo} onChange={handleInputChange} />
//           {formErrors.contactNo && <p className='contactNo-error'>{formErrors.contactNo}</p>}
//           <button onClick={handleFormSubmit}>Submit</button>
//         </section>
//       </form>
//     </div>
//   )
// }
// export default App;



// import React, { Component } from "react";
// import './App.css';

// class App extends Component {
//     render() {

//         return (

//             <ol key={"relativeList"}>
//                 < li key={'relativeListItem1'}>Akshit</li>
//                 < li key={'relativeListItem2'} >Human</li>
//                 < li key={'relativeListItem3'} >God</li>
//             </ol>

//         )
//     }
// }



// export default App;






// // import React, { createContext } from 'react'
// // import Child from './Child';

// // const data =  createContext();
// // const data1 = createContext();
// // const App = () => {
// // // const name = "Sunil";
// // // const Age = 50;

// //   return (
// //     <div>
// //         <data.Provider value={{name:"Sunil ahirwar class bsc"}}>
// //             <data1.Provider value={{age:"25 saal unemployed allways"}}>
// //       <Child/>
// //       </data1.Provider>
// //       </data.Provider>
// //     </div>
// //   )
// // }

// // export default App
// // export {data,data1}





// import React from 'react'
// import AddingListItem from './AddingListItem'
// import SingleListAddItem from './SingleListAddItem'
// import StopWatch from './StopWatch'
// import StopwatchuseReduce from './StopwatchuseReduce'
// import TimeDate from './TimeDate'
// import CountDownTimer from './CountDownTimer'
// import LocalStorageHook from './LocalStorageHook'
// import SaveLocalStorage from './SaveLocalStorage'
// import Login from './Login'
// import Inline from './InlineUses'
// import InlineUses from './InlineUses'

// const App = () => {
//   return (
//     <div>
//         {/* <AddingListItem/>
//         <SingleListAddItem/> */}
//         {/* <StopWatch/> */}
//         {/* <StopwatchuseReduce/> */}
//         {/* <TimeDate/> */}
//         {/* <CountDownTimer/> */}
//         {/* <LocalStorageHook/> */}
         
    
//        <SaveLocalStorage/>
//       <Login/> 
//       {/* <InlineUses/> */}
//     </div>
//   )
// }

// export default App












// import React from 'react'

// const App = () => {
//     const morning = new Date(2023,7,5,9);
//     const afternon = new Date(2023,7,5,14);
//     const night = new Date(2023,7,5,20);
//   return (
//     <div>
//         <p>{morning}</p>
//         <p>{afternon}</p>
      
//         <p>{night}</p>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'

// import {Add,Subustrate,Multiply,Divide} from './Calculator'
// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <li>{Add(5,5)}</li>
//       <li>{Subustrate(20,5)}</li>
//       <li>{Multiply(12,12)}</li>
//       <li>{Divide(5,5)}</li>
      
//     </div>
//   )
// }

// export default App;








//Props used

 

// import React from 'react'
// import Card from './Card'

// const App = () => {
 
//   return (
// //     <div className='cards'>
// //       <div className='card'>
// //         <img 
// //         src= "//images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81"
// //         width='300px' height='200px'
// //         alt ='mypic'
// //         className='card_img'
// //     />
// //     <div className='carf_info'>
// //       <span className='card_category'>A netflix original series</span>
// //     </div>
// // <button>Watch now</button>
        

// //       </div>

      

   
  
// //     </div>

// <>
// <h1>List of top 5 netflix web series</h1>
// <Card  imgsrc='https://variety.com/wp-content/uploads/2022/12/MCDCLUP_EC005.jpg?w=1280'
//  title = 'The Passion of Joan of Arc (1928)'
//  sname = 'max10'
//  link ='https://www.netflix.com/in/'


// />
// <Card imgsrc='https://variety.com/wp-content/uploads/2022/12/71-My-Best-Friends-Wedding.jpg?w=1000'
//  title = 'my best friend wrdding'
//  sname = 'Weddding'
//  link ='https://www.netflix.com/in/'
// />
// <Card imgsrc='https://variety.com/wp-content/uploads/2022/12/MSDALIE_EC009.jpg?w=1280'
//  title = 'Vagabond (1985)'
//  sname = 'Humaga'
//  link ='https://www.netflix.com/in/'/>
 
//  <Card  imgsrc='https://variety.com/wp-content/uploads/2022/12/MCDSHIN_WB007.jpg?w=1280'
//  title = 'E.T. the Extra-Terrestrial (1982) '
//  sname = 'Spielberg a telegram that read, '
//  link ='https://www.netflix.com/in/'
// />

// </>
//   )

// }

// export default App


// import React from 'react'
// import Sdata from './Sdata'
// import Card from './Card'

// // console.log(Sdata[1].sname)
// const App = () => {
//   return (
//     <div>
//       <Card  
//       imgsrc = {Sdata[1].imgsrc}
//       title = {Sdata[1].title}
//       sname = {Sdata[1].sname}
//       link = {Sdata[1].link}

//        />
//          <Card  
//       imgsrc = {Sdata[0].imgsrc}
//       title = {Sdata[0].title}
//       sname = {Sdata[0].sname}
//       link = {Sdata[0].link}

//        />
//          <Card  
//       imgsrc = {Sdata[2].imgsrc}
//       title = {Sdata[2].title}
//       sname = {Sdata[2].sname}
//       link = {Sdata[2].link}

//        />
//          <Card  
      // imgsrc = {Sdata[3].imgsrc}
      // title = {Sdata[3].title}
      // sname = {Sdata[3].sname}
      // link = {Sdata[3].link}

//        />
 
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Sdata from './Sdata'
// import Card from './Card'
// const App = () => {

//   const fav= 'Netflix';
//   if(fav ===  'Netflix'){
    
//   }
//   return (
//     <div>
    
   
//       {
//         Sdata.map((val)=>{
//           return( 
//             <Card
//               key = {val.id}
//             imgsrc = {val.imgsrc}
//             title = {val.title}
//             sname = {val.sname}
//             link = {val.link} />
//           )
//           })};
//     </div>
    
//   )
// }

// export default App















// import React, { useState } from 'react'

// const App = () => {
  
//   let time  = new Date().toLocaleTimeString();
//   const [ctime,setCtime] = useState(time);;
 
   
//   const handleClick=()=>{
//     time  = new Date().toLocaleTimeString();
//     setCtime(time);



//   }
//   setInterval(handleClick,1000);

//   return (
//     <div>

//     <h1>{ctime}  </h1>  
//     <button onClick={handleClick}>button</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Eventsreact from './Eventsreact'
// import FormCreate from './FormCreate'
// import FormSingleState from './FormSingleState'
// import Edit from './Edit'
// import MaterialULUses from './MaterialULUses'
// const App = () => {


//   return (
//     <div>

//      {/* <Eventsreact/> */}
//      {/* <FormCreate/> */}
//    {/* <FormSingleState/> */}
//    {/* <Edit/> */}
//    {/* <MaterialULUses/> */}

     

//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Accordian from './Accordian'
// import SearchFunc from './SearchFunc'
// import SearchingData from './SearchingData'



// const App = () => {
//   return (
//     <div>
//       {/* <Accordian/> */}
//       {/* <SearchFunc/> */}
//  <SearchingData/>
//     </div>
//   )
// }
// // 
// export default App





// import React, { useState } from 'react';
// import Header from './Header';
// import Product from './Product';
// import initialData from './initialData';
// const App = () => {
//   // Sample product data


//   const [filteredData, setFilteredData] = useState(initialData);

//   const handleSearch = (searchQuery) => {
//     // Filter the data based on the search query
//     const filteredProducts = initialData.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(filteredProducts);
//   };

//   return (
//     <div className="app">
//       <Header handleSearch={handleSearch} />
//       <Product data={filteredData} />
//     </div>
//   );
// };

// export default App;












// import React, { useState } from 'react';
// import SearchInput from './SearchInput';

// const ParentComponent = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (query) => {
//     // Your search logic here
//     setSearchQuery(query);
//     // ... rest of the search logic
//   };

//   return (
//     <div>
//       <h1>Search Example</h1>
//       <SearchInput
//         onSearch={handleSearch}
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//       />
//       <ul>
//         {searchResults.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ParentComponent;




// import React from 'react'
// import {fetchTodos} from './reducer/slice'
// import { useSelector, useDispatch } from 'react-redux';

// const App = () => {

//   const dispatch  = useDispatch();


//   return (
//     <div>
//       <h1>HGIii</h1>
//       <button  onClick={e=>dispatch(fetchTodos())}>FetchTodod</button>
//     </div>
//   )
// }

// export default App



//  import React, { useState } from 'react'

//     const App = () => {
//    const [count,setCount]  = useState(0);
//   return (
//     <div>
//      {count > 10 && <p>greater than 10</p>}
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   )
// }

//export default App
  
// import React from 'react'

//  import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// const App = () => {
//   return (
//     <div>
//       <h1>Hii</h1>
//       <h2>How are you</h2>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//          </div>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//      const[name,setName] = useState('');
//      const [email,setEmail] = useState('');
//       const [password,setPassword] = useState('');
//      const [list,setList] = useState ([]);
//          const handleClick =(e)=> {
//           e.preventDefault();
//          const nameSave = localStorage.getItem('name',name);
//         const emailSave = localStorage.getItem('name',email);
//     const passwordSave = localStorage.getItem('name',password);
//            setName(nameSave);
//         setEmail(emailSave);
//         setPassword(passwordSave);         
//         }
//       //   const handleAdd=()=>{
//       //       const  store =  name.trim();
//       //       if(store!== '')  {
//       //         setList((prev)=>[...prev,store]);
//       //         console.log(setList);
//       //       }
//       //      }

//   return (
//  <div>
//           <label> Name </label>
//    <input type='text' placeholder='Enter your name'  onChange={(e)=>setEmail(e.target.value)}  />
//                 {/* <button onClick={handleAdd}>Add</button> */}
               
//       <label>Email</label>
//       <input type='email' placeholder='Enter your email'  onChange={(e)=>setEmail(e.target.value)} />
      
//       <select>Gender 
//          <option>Male</option>
//          <option>female</option>
//          </select>
// <label>password</label>
//  <input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}  />
//            <button  onClick={handleClick}>submit</button>
//            </div>
//   )
// }
// export default App
  //pharmacy 
  // e-commerce 


//   import React from 'react'
// import LocalStorageHook from './LocalStorageHook'
  
//   const App = () => {
//     return (
//       <div>
//         <h1>Localstorage</h1>
//         <LocalStorageHook/>
//       </div>
//     )
//   }
  
//   export default App




// import { useEffect,useState } from "react"
// export default function App() {
//    const[count,setCount]= useState(0);
//    useEffect(()=>{
//      console.log("Mount");
//    },[]);
//   console.log("first rendered");
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}> COunt </button>
//     </div>
//   );
// }



//    import React,{useState,useEffect} from "react";
//     const App = () => { 
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     console.log(
//       "This only happens ONCE.  Anything in here is fired on component MOUNT.");
//     },[]);
  
    
//    console.log("This happens on EVERY render.");
//   return (
//     <>
//       <div>Counter: {counter}</div>
//       <div style={{ marginTop: 20 }}>
//         <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       </div>
//     </>
//   );
// };
// export default App


// Mounting in useEffect
// import { useEffect } from "react";
//  const CompExample = () => 
//  { useEffect(() => {
//    console.log("This code will execute when the component is mounted"); 
//   }, []);
//   return <h1> Hello World! </h1>; }; 
//   export default CompExample;

// 3. React.js componentDidUpdate Example
// The componentDidUpdate method executes only when the component updates. 

// The following code is equivalent to the componentDidUpdate method.

// import { useEffect } from "react";
//  const CompExample = () => { 
//    useEffect(() => {
//     console.log("This code will execute when the component updates");
//   });
//   useEffect(() => {
//     console.log("This code will execute when the component updates");

//   }, [counter]);
//  // he useEffect() hook will execute only when the value of “counter” is changed.
//   return <h1> Hello World! </h1>;
// };
// export default CompExample;



//The following code is equivalent to the componentWillUnmount lifecycle method.

//     import { useEffect } from "react";

// const CompExample = () => {

//   useEffect(() => {
//     return () => {
// console.log("Behavior right before the component is removed from the DOM.");
//   }

//   }, []);

//   return <h1> Hello World! </h1>;

// };

// export default CompExample;


// import { useEffect,useState } from "react";
// export default function App() {
//    const[count,setCount]= useState(0);
//    useEffect(()=> {
//     console.log("Mount1");
// },[]);
//    useEffect(()=>{
//          console.log("Mount2");
//    });

//     console.log("first rendered");
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>COunt</button>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import './App.css'
// export default function App() {
//   const [state, setState] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   async function fetchApi() {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let result = await data.json();
//     setState(result);
//   }

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   // Calculate the range of items to display on the current page
//      const indexOfLastItem = currentPage * itemsPerPage;
//      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);

//   const handleNext = () => {
//     if (currentPage < Math.ceil(state.length / itemsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={handlePrev}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//       <table className="tables">
//         <thead>
//           <tr>
//             <th>userId</th>
//             <th>Id</th>
//             <th>Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.userId}</td>
//               <td>{item.id}</td>
//               <td>{item.title}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }







// import React, { useEffect } from 'react'

// const App = () => {
//   async function fetchApi() {
//          let data =  fetch("https://jsonplaceholder.typicode.com/todos");
//          let result =  data.json();
//         console.log(result);
//   }
      
//          fetchApi();
//   return (
//     <div>
//       <h1>Hello:</h1>
//     </div>
//   )
// }

// export default App



// // Import the React library
// import React, { useState } from 'react';

// // Define a functional component
// function VirtualDOMExample() {
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



// import React from 'react'
// import SimpleFile from './ReacBasicCode/SimpleFile'
// import ExampleComponent from './ThreeHook'
//   const App = () => {
//   return (
//     <div>
//       {/* <SimpleFile/> */}
// <ExampleComponent/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import OutputbasedQuestion  from './ReacBasicCode/OutputbasedQuestion'
// const App = () => {
//   return (
//     <div>
//       <OutputbasedQuestion/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import TimerchatgptSunil from './TimerchatgptSunil'
// import FindMissingNumber from './dsajavareact/FindMissingNumber'
//  import OutputbasedQuestion from './ReacBasicCode/OutputbasedQuestion'
// import SimpleFile from './ReacBasicCode/SimpleFile'
// const App = () => {
//   return (
//     <div>
//       {/* <TimerchatgptSunil/> */}
//       {/* <FindMissingNumber/> */}
//       {/* <OutputbasedQuestion/> */}
//       <SimpleFile/>
//     </div>
//   )
// }

// export default App



















import React from 'react'
import PaginationItem from './Pagination'
import Crudchatgpt from './Crudchatgpt'

const App = () => {
  return (
    <div>
    {/* <PaginationItem/> */}
    <Crudchatgpt/>
    </div>
  )
}

export default App

