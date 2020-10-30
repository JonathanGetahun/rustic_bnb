import { RECEIVE_LISTINGS, UPDATE_DISPLAY, UPDATE_LOCATION } from '../actions/types'

const initialState = [];
const listReducer = (state = initialState, action) => {
    
    console.log("working")
    switch(action.type){
        case RECEIVE_LISTINGS:
            console.log("working-1")
            console.log(action.payload.data)
            return [...action.payload.data]
        case UPDATE_LOCATION:
            const content = action.payload
            let newState = {...state}
            return newState.map((listed, i) => {
                listed.newLocation = content[i]
            })
        case UPDATE_DISPLAY:
            const marker = action.payload
            const newStateDisplay = [...state]
            console.log(newStateDisplay)
            return newStateDisplay.map((listed) => {
                if(listed.locationName == marker.locationName) {
                    listed.display= !listed.display
                }
                return listed
            })
        default:
            console.log("working-2")
            return state
    }
} 


export default listReducer;