import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('fetchTodos', async()=> {
    const response = await fetch ('https://jsonplaceholder.typicode.com/photos')

    return response.json()

 } )

const todoSLice = createSlice ({
     name:'todo',

     initialState:{
        isLoading:false,
        data:null,


     },
      extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading = true;

        });

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
           state.isLoading = false;
           state.data = action.payload;


          })
          builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log("Error",action.payload);
            state.isError = true;
          })

         

      }

})

export   default todoSLice.reducer; 