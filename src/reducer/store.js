import { configureStore } from '@reduxjs/toolkit'
import  todoReducer from  './slice'




 

const store = configureStore({
    reducer:{ 
        // reducers function aane bale hai
        todo:todoReducer

     
    }
}) 
export default store