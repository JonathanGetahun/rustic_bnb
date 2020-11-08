import { RECEIVE_USER, LOGOUT_USER, LOGGED_IN } from '../actions/types'
import * as UserServices from '../services/userServices';
const initialState = {}

const userReducer = (state =initialState, action) => {
    switch(action.type) {
        case RECEIVE_USER: 
            
                state = {...state, ...action.payload, logged: true}
                return state
        
        case LOGGED_IN:
            let user = UserServices.getCurrentUser()
            return {...user, logged: true}
        case LOGOUT_USER: 
            UserServices.logout()
            return {...initialState, logged: false}
        default: 
            return state
    }
}

export default userReducer