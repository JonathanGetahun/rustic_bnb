import { RECEIVE_LISTINGS } from '../actions/types'



const initialState = []

const originalListReducer = (state=initialState, action) => {

    switch(action.type){
        case RECEIVE_LISTINGS:
            return [...action.payload.data]
        default: 
            return state
    }
}

export default originalListReducer