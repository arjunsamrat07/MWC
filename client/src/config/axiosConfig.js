import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://localhost:3030",
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
});


export default axios;
