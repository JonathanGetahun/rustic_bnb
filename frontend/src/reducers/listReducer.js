import { RECEIVE_LISTINGS, UPDATE_DISPLAY, UPDATE_LOCATION } from '../actions/types'


const initialState = [];
const  listReducer = (state = initialState, action) => {
    

    
    switch(action.type){
        case RECEIVE_LISTINGS:
            
            console.log(action.payload.data)
            return [...action.payload.data]
        case UPDATE_LOCATION:
            const content = action.payload
            let newState = {...state}
            return newState.map((listed, i) => {
                listed.newLocation = content[i]
            })
        case UPDATE_DISPLAY:
            // const marker = action.payload
            // const newStateDisplay = [...state]
            // console.log(newStateDisplay)
            // return newStateDisplay.map((listed) => {
            //     if(listed.locationName == marker.locationName) {
            //         listed.display= !listed.display
            //     }
            //     return listed <---don't make this mistake again
            // })

            // const display = action.payload
            // originalList.filter((og,i) => {
            //     if(display[i]){
            //         return og
            //     }
            // })

            return action.payload
        default:
            console.log("working-2")
            return state
    }
} 


export default listReducer;