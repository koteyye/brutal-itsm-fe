import axios from "axios"
import {useToken} from "../../hooks/useCheckAuth.js";



export const axiosInstanceAuth = axios.create({
    withCredentials: true,
})

export const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer ${useToken()}`,
    },
    withCredentials: true,
})