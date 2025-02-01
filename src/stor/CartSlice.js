import { createSlice } from '@reduxjs/toolkit'


const inialSate=[]

export const CartSlice = createSlice({
  name:"cart",
  inialSate,
  reducers:{

    Add:(state, action)=>(
      state.push(action.payload)
      
    )

  }
})

export const {add}=CartSlice.actions

export default CartSlice.reducer