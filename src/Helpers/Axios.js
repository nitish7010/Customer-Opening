import axios from 'axios'
import { isAuthenticated } from './helpers'

let url = {
    dev:"http://jklgdev.jktyre.in:9001",
    local:"http://localhost:9001",
}

const instance = axios.create({
    baseURL:url.dev,
    headers:{
        Authorization: `Bearer ${isAuthenticated() && isAuthenticated().token}`
    }
})

export default instance;