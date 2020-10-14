import axios from 'axios'

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const loginUser = async credentials => {
    const response = await axios.post('/login', credentials)
    return response.data
}


const signUpUser = async ( userData ) => {
    try {
        const res = await axios.post('/', userData);
        return res.data;
    } catch (e) {
        throw new Error(`status ${e.response.status}: ${e.response.data.error}`)
    }
}

export { loginUser, signUpUser }
