import { connect } from 'react-redux';
import SearchPage from './SearchPage';
import { fetchListings } from '../../../actions/listing_actions'
import { withRouter } from 'react-router-dom';


const msp = state => {
    
    return {
        list: state.list,
    }
}

const mdp = dispatch => {
    
    return { 
        fetchListings: () => dispatch(fetchListings())
    }
}

export default connect(msp, mdp)(SearchPage)