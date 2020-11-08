import { RECEIVE_LISTINGS, UPDATE_DISPLAY, UPDATE_LOCATION } from '../actions/types'


const initialState = [];
const  listReducer = (state = initialState, action) => {
    

    
    switch(action.type){
        case RECEIVE_LISTINGS:
            
            
            return [...action.payload.data]
        case UPDATE_LOCATION:
            const content = action.payload
            let newState = {...state}
            return newState.map((listed, i) => {
                return listed.newLocation = content[i]
            })
        case UPDATE_DISPLAY:
            return action.payload
        default:
            return state
    }
} 


export default listReducer;