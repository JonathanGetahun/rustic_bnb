import axios from 'axios'

const refreshLocation = () => {
    const response = axios.get('/home')
    return response
}

//this one for the actual list
const listLocation = async () => {
    const response = await axios.get('/goFindList')
    
    //try response.data next time
    return response
}

 export { refreshLocation, listLocation }