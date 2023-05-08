import axios from "axios";

export const axiosClassic = axios.create({
    baseURL: 'http://localhost:4200/api',
    headers: {
        'Content-Type': 'application/json',
    },
})