import axios from 'axios'

// export const API_URL = 'http://localhost:5000'
export const API_URL = 'https://fair-khakis-seal.cyclic.app/'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use(config => {
    if (localStorage.getItem('token')) config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api