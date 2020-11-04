
import { combineReducers } from 'redux'
import listReducer from './listReducer'
import originalListReducer from './originalListReducer'
import userReducer from './userReducer'

export default combineReducers({
    list: listReducer,
    originalList: originalListReducer,
    user: userReducer
})