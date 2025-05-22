import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/chat',
    withCredentials: true,
})

export default instance;