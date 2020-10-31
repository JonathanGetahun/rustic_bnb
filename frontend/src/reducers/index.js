
import { combineReducers } from 'redux'
import listReducer from './listReducer'
import originalListReducer from './originalListReducer'

export default combineReducers({
    list: listReducer,
    originalList: originalListReducer
})