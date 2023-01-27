import { createSlice } from '@reduxjs/toolkit'
import axios from '../config/axiosConfig'

export const reducers = createSlice({
  name: "mwc",
  initialState: {
    isLogedin: false
  },

  reducers: {
    userLogin: (state, action) => {

      axios.post("/users/login", action.payload.data)
        .then((res) => {
          console.log(res)
          let data = res.data
          console.log("?>?>?>", data.user.role)
          state.isLogedin = true
          if (data) {
            sessionStorage.setItem("userToken", data.accessToken)
            action.payload.navigate(data.user.role)
          }
        })
      // .catch((err)=> {
      //   console.log(err)
      // })

    },

    userAuth: (state, action) => {
      axios.defaults.headers['authorization'] = `bearer ${sessionStorage.getItem('userToken')}`
      console.log(sessionStorage.getItem('userToken'))
      axios.post("/users/userauth", {})
        .then(async (res) => {
          let data = await res.data
          console.log("?>?>?>", data)
          if (data) {
            action.payload.navigate(data.role)
          }
        })
    }
  }

})

export const { userLogin, userAuth } = reducers.actions

export default reducers.reducer