import {RECEIVE_USER, LOGOUT_USER, LOGGED_IN} from './types'
import * as UserServices from '../services/userServices'

const receiveUser = (data) => {
    return {
        type: RECEIVE_USER,
        payload: data
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    }
}

export const loggedIn = () => {
    return {
        type: LOGGED_IN
    }
}

export const fetchUser = (credentials) => dispatch => {
    
    return UserServices.loginUser(credentials).then(data => {
        return dispatch(receiveUser(data))
    })
}