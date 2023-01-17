import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
});


export default axios;
