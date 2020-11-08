
import { combineReducers } from 'redux'
import listReducer from './listReducer'
import originalListReducer from './originalListReducer'
import userReducer from './userReducer'
import reviewReducer from './reviewReducer'

export default combineReducers({
    list: listReducer,
    originalList: originalListReducer,
    user: userReducer,
    reviews: reviewReducer
})