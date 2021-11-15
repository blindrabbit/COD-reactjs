import axios from "axios"

// URL DA MINHA API
// Também posso criar váriavel de ambiente
const api = axios.create({
    // baseURL: "http://10.50.1.142:8010"
    baseURL: "http://127.0.0.1:5000"
})

export default api;