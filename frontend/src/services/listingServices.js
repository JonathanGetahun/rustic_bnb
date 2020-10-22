import axios from 'axios'

const listLocations = () => {
    const response = axios.get('/search/list')
    return response
}

 export { listLocations }