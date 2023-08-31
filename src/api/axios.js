import axios from 'axios'

const instace = axios.create({
    baseURL: 'https://task-agendasb.onrender.com/api',
    withCredentials: true,
})

export default instace;