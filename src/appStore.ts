import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

type TAuthToken = {
  token: string | undefined;
} 

const initialState:TAuthToken = {
  token: undefined,
};
const authSlice = createSlice ({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, {payload}) =>{state.token = payload },
    removeToken: (state)=> {state.token = undefined}
  }
})

export const {setToken, removeToken} = authSlice.actions;

const store = configureStore({
  reducer: authSlice.reducer
})

const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()

export {store, useAppSelector};