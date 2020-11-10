import axios from 'axios'

const refreshLocation = () => {
    const response = axios.get('/api/home')
    return response
}

//this one for the actual list
const listLocation = async () => {
    const response = await axios.get('/api/goFindList')
    
    //try response.data next time
    return response
}

 export { refreshLocation, listLocation }