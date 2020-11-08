import { RECEIVE_REVIEW, POST_REVIEW} from './types';
import * as  ReviewServices from '../services/reviewServices';


const postReview = (ratings) => ({
    type: POST_REVIEW,
    payload: ratings
})


export const updateReviews = (ratings) => dispatch => {
    ReviewServices.postReview(ratings).then(updates => dispatch(postReview(updates)))
}

