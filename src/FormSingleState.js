// import React, { useState } from 'react'

// const FormSingleState = () => {

//     const[fullName,setFullName] = useState({
//         fname:'',
//         lname:'',
//         email:'',
//         phone:'',     
//     })

//     const handNameChangre=(event)=>{
   
//         // const value = event.target.value;
//         // const name = event.target.name;

//         const {value,name} = event.target;
//         setFullName((prev)=>{

//             if(name === "fName"){
//                 return{
//                 fname:value,
//                 lname:prev.lname,
//                 email:prev.email,
//                 phone:prev.phone,
//                 }
//             }
        
//            else if(name === "lName"){
//                 return{

//                 fname:prev.fname,
//                 lname:value,
//                 email:prev.email,
//                 phone:prev.phone,
//                 }
//             }
//             else if(name === "email"){
//                 return{
//                 fname:prev.fname,
//                 lname:prev.lname,
//                 email:value,
//                 phone:prev.phone,
//                 }
//             }
//             else if(name === "phone"){
//                 return{
//                 fname:prev.fname,
//                 lname:prev.lname,
//                 email:prev.email,
//                 phone:value,
//                 }
//             }
 
//         })

    
//     }
// const submitForm=(event)=>{
//  event.preventDefault();
//  alert('form submitted')
  
// }


//   return (
//     <div>
//         <form onSubmit={submitForm}>
//       <h1>Hello {fullName.fname} && {fullName.lname} </h1>
//       <h1>Hello {fullName.email} && {fullName.phone} </h1>
//       <input type='text' placeholder='Enter your name'
//         name='fName'
//         value={ fullName.fname}
   
//     onChange={handNameChangre}

//       />
//       <input type='text' placeholder='Enter your last name'
//       name='lName'
//       value={fullName.lname}

   
//       />

// <input type='email' placeholder='Enter your email'
// name='email'

// value={fullName.email}
//     onChange={handNameChangre}
 
//       />

// <input type='number' placeholder='Enter your phone Number'
//  name = "number"
//  value={fullName.phone}

//     onChange={handNameChangre} 
    
    
//         />
//       <button  type='submit'>Click</button>
//       </form>
//     </div>
//   )
// }

// export default FormSingleState

import React, { useState } from 'react';

const FormSingleState = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFullName((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    alert('Form submitted');
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <h1>
          Hello {fullName.email} {fullName.phone}
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          name="fname"
          value={fullName.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          name="lname"
          value={fullName.lname}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={fullName.email}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your phone number"
          name="phone"
          value={fullName.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSingleState;
