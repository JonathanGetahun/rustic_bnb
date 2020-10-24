import axios from 'axios'

const listLocations = () => {
    const response = axios.get('/search/list')
    return response
}

const listLocation =  () => {
    const response =  axios.get('/list')
    return response
}

 export { listLocations, listLocation }