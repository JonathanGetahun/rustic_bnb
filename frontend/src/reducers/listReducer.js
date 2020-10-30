import { RECEIVE_LISTINGS } from '../actions/types'

const initialState = {};
const listReducer = (state = initialState, action) => {
    Object.freeze(state)
    console.log("working")
    switch(action.type){
        case RECEIVE_LISTINGS:
            console.log("working-1")
            console.log(action.payload.data)
            return Object.assign({}, action.payload.data)
        default:
            console.log("working-2")
            return state
    }
} 


export default listReducer;