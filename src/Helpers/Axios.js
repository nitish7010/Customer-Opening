import axios from 'axios'
import { isAuthenticated } from './helpers'

let url = {
    dev:"",
    local:"http://localhost:9001",
}

const instance = axios.create({
    baseURL:url.local,
    headers:{
        Authorization: `Bearer ${isAuthenticated() && isAuthenticated().token}`
    }
})

export default instance;