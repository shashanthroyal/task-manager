import axios from 'axios'

export const api = axios.create({
    baseURL : 'https://task-manager-backend-tv6p.onrender.com/api'
});