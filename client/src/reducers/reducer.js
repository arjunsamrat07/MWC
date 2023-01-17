import { createSlice } from '@reduxjs/toolkit'
import axios from '../config/axiosConfig'

export const reducers = createSlice({
  name: "mwc",
  initialState: {
    user: {
      name: "arjun"
    }
  },

  reducers: {
    userLogin: (state, action) => {

      axios.post("/users/login", action.payload)


    }
  }

})

export const { userLogin } = reducers.actions

export default reducers.reducer