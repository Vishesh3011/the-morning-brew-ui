import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Feature/userSlice"
import  newsSlice  from "../Feature/newsSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        news: newsSlice
    }
})


