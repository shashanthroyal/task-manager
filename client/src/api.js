import axios from 'axios'

export const api = axios.create({
    baseURL : 'https://task-manager-server-5y15.onrender.com/api'
});
