 import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";

 export const store = configureStore({
   reducer: {
     // Add your reducers here
     user: userReducer,
   },
 });
 export type RootState = ReturnType<typeof store.getState>;