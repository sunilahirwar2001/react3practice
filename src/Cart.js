
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
 
// const Cart = () => {
//     // const products = useSelector((state)=>state.amazonReducer.products);
//     // console.log(products);
//      const [products,setProducts] = useState([]);

   
//    const fetchData =async ()=>{
//     let data = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
//     let result = await data.json();
//     setProducts(result);
//    }
//    useEffect(()=>{
//  fetchData();
       
//      },[])




//   return (
//     <div className='w-full bg-gray-100 p-4'>
//  <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>

//     <div className='w-full h-full bg-white px-4 col-span-4'>
//  {/* <div className='w-full h-full bg-white col-span-1 '></div> */}
//   <div className='font-titleFont flex items-center justify-between border-b-[1px]
//   border-b-gray-400 py-3'>
//     <h2 className='text-3xl font-medium'>Shopping Cart</h2>
//     <h4 className='text-xl font-semibold'>Subtitle</h4>
//     </div>
// <div>
//     {products.map((item) => (
//       {/* Remove the comment tags */}
//          <div key={item.id} className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6'>
//              <div  className='w-1/5'> 
//             <img className='w-full h-44 object-contain' src={item.image} alt='ProductImg' />
//             </div>
//             <div>
//              <h2 className='font-semibold text-lg'>{item.title}</h2>
//              <p className='pr-10 text-sm'>{item.description}</p>
//              <p className='text-base'>Unit Price <span className='font-semibold'></span>{item.price}</p>
//         </div>
//         </div>
     
//         <p>Qty:</p>
//         <p  className='cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300'
//         >-</p>
//         <p>{item.quantity}</p>
//         <p  className='cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300'>+</p> 
//         </div>
      
//     ))}
//     </div>
// </div>
// <div>
   
//   </div>
//  </div>
//  <div className='w-full h-full bg-white col-span-1'></div>
//  </div>
 
//   )
//     }
//     export default Cart;






