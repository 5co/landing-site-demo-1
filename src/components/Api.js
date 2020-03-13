import axios from 'axios'

export const Api = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*'
    },
});
