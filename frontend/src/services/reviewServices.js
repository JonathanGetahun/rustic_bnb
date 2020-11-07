import axios from 'axios';

const postReview = (ratings) => {
    const response = axios.post('/review', ratings);
    return response
}

export { postReview }