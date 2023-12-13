// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom'
// import StarIcon from '@mui/icons-material/Star';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import { useSelector } from 'react-redux';
// import ApiIcon from '@mui/icons-material/Api'
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/amazonSlice';


// const Products = (searchQuery) => {
//   const searchdata = useSelector((state) => state.search);
//   console.log(searchdata);
//   // const products = useSelector((state) => state.amazonReducer.products);
//   // const searchCategory = useSelector((state) => state.amazonReducer.searchCategory);
//   // // You can further filter products based on the category
//   // // Assuming you have a property "category" in your product data
//   // let filteredProducts = products.filter(item => item.category.includes(searchCategory));

// const  q= searchQuery.searchQuery.searchQuery;
// // // console.log(q); 
  
//   const dispatch = useDispatch()
    

//   const data = useLoaderData();
  
// //      console.log(data);
//   const productData = data;
 

//   const filteredProducts = productData.filter((product) =>
//   searchdata.toLowerCase() === '' ? product :
//   product.category.toLowerCase().includes(searchdata.toLowerCase()) || product.description.toLowerCase().includes(searchdata.toLowerCase())
//   || product.title.toLowerCase().includes(searchdata.toLowerCase())
// );
  
//   return (
//     <div className='max-w-screen-2xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-10 px-4'>
//       {/* { 
      
       
//       productData.
//       filter((item) => {
//         return q.toLowerCase()==''
//         ? item :
//         item.description.toLowerCase().search(q.toLowerCase())

//       }) */}

// { 

// filteredProducts
//         // .filter((item) => {
//         //   return q.toLowerCase() === '' // If search query is empty, return all items
//         //     ? true
//         //     : item.description.toLowerCase().includes(q.toLowerCase()) || item.title.toLowerCase().includes(q.toLowerCase()) || item.category.toLowerCase().includes(q.toLowerCase()); // Filter based on description
//         // })
//       .map((item) => (
//         <div key={item.id} 
//         className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30
//         hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
//             <span className='text-xs capitalize italic top-2 right-2 text-gray-500'>{item.category}</span>
      
         
//       <div  style={{ maxHeight: '16rem' }}  className=' flex items-center justify-center relative group'>
//         <img className='h-20' src={item.thumbnail} alt='ProductImg' />
// {/*       
//        <ul className=' h-20 bg-gray-100 absolute bottom-[-170px] flex flex-col
        
//         items-end justify-center gap-2 font-titleFont px-2 bottom-1 border-r
//         group-hover:bottom-0
//         '>
//           <li className='productLi'>
//             Compare{" "}
//             <span>
//               <ApiIcon/> 
//             </span>
//           </li>
//           <li className='productLi'>
//             Add to Cart
//             <span>
//      <ShoppingCartIcon/>
//             </span>
//           </li>

//           <li className='productLi'>
//             View Details {' '}
//             <span>
//            <ArrowCircleRightIcon/>
//              </span>
//           </li>

//           <li className='productLi'>
//             Add to Wish List {" "}
//             <span>
//            <FavoriteIcon/>
//             </span>
//           </li>
         
//         </ul > */}
     
//       </div>

//       <div className='px-4 z-10 bg-white'>
//       <div className='flex items-center justify-between'>
//        <h2>{item.title.substring(0,20)}</h2>
//        <p>${item.price}</p>

//        </div>
     
//        <div>
//         <p className='text-sm'>{item.description.substring(0,50)}..
//         </p>
//         <div className='text-yellow-500'>
//         <StarIcon /> 
//         <StarIcon/>
//         <StarIcon/>
//         <StarIcon/>
//         </div>
        
//         </div>
//         <button
//          onClick={()=>dispatch(addToCart({
//           id:item.id,
//           title:item.title,
//           description:item.description,
//           price:item.price,
//           image:item.thumbnail,

//           quantity:1,

//          }))}
        // className='  font-titleFont font-medium text-base bg-gradient-to-tr
        // from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
        // border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
        // active: from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'>Add to Cart</button>
    
    
//        </div>
//        </div>
//     ))}
//     </div>
//   );
// };

// export default Products; 



// Products.js







// Products.js
// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import StarIcon from '@mui/icons-material/Star';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ApiIcon from '@mui/icons-material/Api';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/amazonSlice';

// const Products = (searchQuery) => {
//   const q = searchQuery.searchQuery.searchQuery;
//   console.log(q);
//   const dispatch = useDispatch();

//   const data = useLoaderData();
//   const productData = data.data;

//   return (
//     <div className='parent-container overflow-x-hidden max-w-screen-2xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-10 px-4'>
//       {productData
//         .filter((item) => {
//           return q.toLowerCase() === ''
//             ? true
//             : item.description.toLowerCase().includes(q.toLowerCase()) ||
//                 item.title.toLowerCase().includes(q.toLowerCase()) ||
//                 item.category.toLowerCase().includes(q.toLowerCase());
//         })
//         .map((item) => (
//           <div
//             key={item.id}
//             className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30
//             hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'
//           >
//             <span className='text-xs capitalize italic top-2 right-2 text-gray-500'>{item.category}</span>

//             <div className=' h-auto flex items-center justify-center relative group'>
//               <img className='w-52 h-64 object-contain' src={item.image} alt='ProductImg' />

//               <ul
//                 className=' h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col
//                   items-end justify-center gap-2 font-titleFont px-2 bottom-1 border-r
//                   group-hover:bottom-0'
//               >
//                 <li className='productLi'>
//                   Compare <span><ApiIcon/></span>
//                 </li>
//                 <li className='productLi'>
//                   Add to Cart <span><ShoppingCartIcon/></span>
//                 </li>
//                 <li className='productLi'>
//                   View Details <span><ArrowCircleRightIcon/></span>
//                 </li>
//                 <li className='productLi'>
//                   Add to Wish List <span><FavoriteIcon/></span>
//                 </li>
//               </ul>
//             </div>

//             <div className='px-4 z-10 bg-white'>
//               <div className='flex items-center justify-between'>
//                 <h2>{item.title.substring(0, 20)}</h2>
//                 <p>${item.price}</p>
//               </div>

//               <div>
//                 <p className='text-sm'>{item.description.substring(0, 100)}..</p>
//                 <div className='text-yellow-500'>
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </div>
//               </div>

//               <button
//                 onClick={() =>
//                   dispatch(addToCart({
//                     id: item.id,
//                     title: item.title,
//                     description: item.description,
//                     price: item.price,
//                     image: item.image,
//                     quantity: 1,
//                   }))
//                 }
//                 className=' font-titleFont font-medium text-base bg-gradient-to-tr
//                   from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-
//                   border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
//                   active:from bg-yellow-400 active:to-yellow-500 duration-200 py-1 rounded-md mt-3'
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Products;
