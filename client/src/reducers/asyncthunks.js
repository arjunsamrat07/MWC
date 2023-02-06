import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../config/axiosConfig"


export const userLogin = createAsyncThunk('userlogin', async (params) => {
    const { data, navigate } = params
    let userdata
    await axios.post("/users/login", data)
        .then((res) => {
            // console.log(res)
            userdata = res.data
            // console.log("?>?>?>", userdata.user.role)
            if (userdata) {
                sessionStorage.setItem("userToken", userdata.accessToken)
            }

        })
        .catch((err) => {
            console.log(err)
        })
    if (userdata) {
        return {
            userdata, navigate
        }
    }
})
export const userAuth = createAsyncThunk('userauth', async (params) => {
    let { navigate } = params

    axios.defaults.headers['authorization'] = `bearer ${sessionStorage.getItem('userToken')}`
    let userdata
    await axios.post("/users/userauth", {})
        .then(async (res) => {
            userdata = await res.data
            
            console.log(userdata)
        })
    return { userdata, navigate }

})