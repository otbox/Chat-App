import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";

const Store =  configureStore({
    reducer,
    middleware :[...getDefaultMiddleware({thunk:false})] 
  })
  
  export default Store;