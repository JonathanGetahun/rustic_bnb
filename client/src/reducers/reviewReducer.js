import { RECEIVE_REVIEW, POST_REVIEW} from '../actions/types';


const initialState = [];

const reviewReducer = (state=initialState, action) => {
    switch(action.type){
        case POST_REVIEW:
            return [...action.payload]
        default: 
            return state
    }
}

export default reviewReducer;