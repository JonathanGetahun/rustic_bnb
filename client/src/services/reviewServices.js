import axios from 'axios';

const postReview = (ratings) => {
    
    const response = axios.post('/api/review', ratings);
    return response
}

export { postReview }