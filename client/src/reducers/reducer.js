import { createSlice } from '@reduxjs/toolkit'
// import axios from '../config/axiosConfig'
import { userAuth, userLogin } from './asyncthunks';
import io from 'socket.io-client';


const initialState = {
  isLogedin: false,
  user: {},
  alertList:[]
}

function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}


export const reducers = createSlice({
  name: "mwc",
  initialState,

  reducers: {

    addNewAlert:(state, action)=>{
      console.log(">>>>>>>>>>>>>>>>>", action.payload)
      state.alertList.unshift(action.payload)
    },


    socketConnection: async (state, action) => {
      const socket =  io(`http://localhost:3030`).connect()
      socket.on('client', async data => {
        // const audio = await new Audio(alertAudio)
        // alertAudio.loop = true
        // socket.emit("security", "worldzzzz")
        // props.setalert(state => { return { ...state, alert: true, data: data } })
        // console.log(data)
        // alertAudio.play()
        // console.log(alertAudio)
      })

      socket.on('server', data => {
        // socket.emit("security", "worldzzzz")

        console.log(data)
      })
      socket.emit("join_room", "client")
      socket.emit("join_room", "server")
      socket.disconnect()

    }

  },

  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      console.log(action.payload)

      let user = parseJwt(action.payload.userdata.accessToken)
      state.user = user
      // console.log(user)
      state.isLogedin = true
      action.payload.navigate(user.role)
    },

    [userAuth.fulfilled]: (state, action) => {
      console.log(">>>>>>>?????>>>>>", action)
      if (action.payload.userdata) {
        let user = parseJwt(sessionStorage.getItem('userToken'))
        state.user = user
        // console.log(user)
        state.isLogedin = true
        action.payload.navigate(user.role)
      }
    }
  }

})

export const { socketConnection, addNewAlert } = reducers.actions

export default reducers.reducer