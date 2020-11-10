import React from 'react'
import { connect } from 'react-redux'
import '../../styling/viewPage.css'

import Button from '@material-ui/core/Button';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import WifiIcon from '@material-ui/icons/Wifi';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import KitchenSharpIcon from '@material-ui/icons/KitchenSharp';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import StarIcon from "@material-ui/icons/Star"
import ViewMap from './viewMap'
import moment from 'moment'
import DropDown from './dropdown'
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import 'react-dates/lib/css/_datepicker.css';
import './datepicker_override_show.css'
// import DatePicker from './datepicker'

import { withRouter } from 'react-router-dom';
import ViewLogin from './viewLogin'
// import LoginContent from '../Modal_Parts/Login_Container'
import { getCurrentUser } from '../../services/userServices'
import { fetchListings } from '../../actions/listing_actions'
import { loggedIn } from '../../actions/user_actions'
import { createBooking } from '../../services/bookingServices'

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

class ViewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE,
            bookedDates: [],
            focused: null,
            guests: 1,
            showLogin: false,
            showSignUp: false,
        };

        this.onFocusChange = this.onFocusChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.numGuests = this.numGuests.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.setSignUpClick = this.setSignUp.bind(this);
        this.setLogin = this.setLogin(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.handleReserve = this.handleReserve.bind(this);
    }

    
    numGuests(n) {
        this.setState({ guests: n });
    }

    componentDidMount() {
        
        this.props.fetchListings()
        loggedIn()
    }

    onFocusChange() {
        this.setState({
            focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
        });
    }

     setLogin() {
       
    }

    setSignUp() {
        this.setState({
            showSignUp: !this.state.showSignUp
        })
    }


    handleLoginClick(e) {
        // e.preventDefault();;
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    handleMouseClick(){
        this.handleLoginClick()
    }

    handleReserve(e) {
        e.preventDefault();
        let listing = this.props.originalList[this.props.match.params.id]
        console.log("listing check", listing)
        let startDate = moment(this.state.startDate).format('YYYY-MM-DD');
        let endDate = moment(this.state.endDate).format('YYYY-MM-DD');
        let userEmail = getCurrentUser().email
        let newBooking = {
            images: listing.images,
            startDate: startDate,
            endDate: endDate,
            location: listing.location,
            locationName: listing.locationName,
            price: listing.Price,
            email: userEmail,
            id: listing.id
        }
        const history = this.props.history;
        const userId = this.props.user.id;
        createBooking(newBooking)
            .then(() => history.push(`/users/${userId}`));

    }


render(){
    const listing = this.props.originalList[this.props.match.params.id];
    const user = getCurrentUser();
        
        // user === null && console.log("logged out")
        // user !== null && console.log("logged in")
    if(!listing) { 
        return <div></div>
    }
    const pictures = listing.images.map((pics,i) => {
                    if(i === 0) {
                        // eslint-disable-next-line
                        return;
                    }
                    return <div className="arena-sub-pic" key={i}>
                    <img
                        src={pics}
                        alt={`pic-${i}`}
                    />
                    </div>
                })
    const amenities = listing.amenities.map((things,i) => {
                    return <li key={i}>{things}</li>
                })
    //gets the date stamp and review
    const reviewList = listing.reviewText.map((reviews,i) => {
        let savedDate = moment(reviews.Date).format('MMMM Do YYYY')
        let review = <div><h5>{savedDate}</h5>{reviews.text}</div>
        return <li key={i}>{review}</li>
    })

    //calculates the average reviews received for each citeria
    const totalReveiew = (data) => data.reduce((a, b) => a + b) / data.length;
    
    const accuracy = totalReveiew(listing.accuracy)
    const communication = totalReveiew(listing.communication)
    const cleanliness = totalReveiew(listing.cleanliness)
    const locationReview = totalReveiew(listing.locationReview)
    const checkIn = totalReveiew(listing.checkIn)
    const value = totalReveiew(listing.value)


    return (

<div className="arena-details-container">
                    <div className="arena-title-city-pics">
                        <div className="arena-pics">
                            <div className="arena-main-pic">
                                <img src={listing.images[0]} alt="main-listing" />
                            </div>
                            <div className="arena-sub-pics">
                                {pictures}
                            </div>
                        </div>
                    </div>
                <div className="arena-show-container">
                    <div className="arena-details-text-container">
                            <div className="arena-title-city">
                                <div className="arena-details-name">
                                    <div>
                                    {listing.locationName}
                                    </div>
                                    <div className="gm-pic-container">
                                        <Button variant="contained" color="primary">{listing.host} </Button>
                                    </div>
                                </div>

                                {listing.location}
                            </div>
                            <br></br>
                            <div className="arenas-show-key-list">
                                
                                <ul>
                                    {amenities}
                                </ul>
                            </div>
                    
                        <div className="arena-gm-container">
                            <div className="arena-gm-descriptions">
                                <div className="arena-gm-title">
                                    <StarsTwoToneIcon /> {listing.host} is a Superhost</div>
                                <div className="arena-gm-expand">
                                        Superhosts are experienced, 
                                        highly rated hosts who are committed to providing 
                                        great stays for guests.
                                </div>
                                <div className="arena-gm-title">
                                   <HomeOutlinedIcon /> Entire Home</div>
                                <div className="arena-gm-expand">
                                    You'll have the entire place!
                                    It's sparkling clean, host committed to 5-step enhanced cleaning process.
                                </div>
                                <div className="arena-gm-title">
                                   <AssignmentTurnedInIcon /> Self check-in</div>
                                <div className="arena-gm-expand">
                                    Check yourself in with the smartlock.
                                </div>
                                <div className="arena-gm-title">
                                    <MenuBookTwoToneIcon /> Great check-in experience</div>
                                <div className="arena-gm-expand">
                                    100% of recent guests gave the check-in process a 5-star rating.
                                </div>
                            </div>
                        </div>
                        <div className="arena-long-description-container">
                            <div className="arena-long-description">
                                {listing.description}
                            </div>
                        </div>
                        <div className="amenities-container">
                            <div className="amenities-title">
                                Amenities
                            </div>
                            <div className="amenities-list-container">
                                <li><WifiIcon /> Wifi</li>
                                <li><WhatshotIcon /> Heat</li>
                                <li><KitchenSharpIcon /> Kitchen</li>
                                <li><LocalLaundryServiceIcon /> Laundry</li>
                            </div>
                        </div>
                        <div className="arena-availabilities-container">
                        <div className="availabilities-title">
                            Availabilities
                        </div>
                        <div className="availabilities-description">
                            Enter your desired trip dates for accurate pricing and availability.
                        </div>
                        {/* <DayPickerRangeController
                                startDate={startDate}
                                endDate={endDate}
                                onDatesChange={({ startDate, endDate }) => changeDate({ startDate, endDate })}
                                focusedInput={focusedInputLeftCol}
                                onFocusChange={onFocusChange}
                                initialVisibleMonth={() => moment().add(0, "M")}
                                numberOfMonths={2}
                                // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                hideKeyboardShortcutsPanel={true}
                        /> */}
                        <DayPickerRangeController
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                focusedInput={this.state.focusedInputLeftCol}
                                onFocusChange={this.onFocusChange}
                                initialVisibleMonth={() => moment().add(0, "M")}
                                numberOfMonths={2}
                                // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                hideKeyboardShortcutsPanel={true}
                        />
                        </div>
                        <div className="arena-availabilities-container">
                        <div className="availabilities-title">
                            Reviews
                        </div>
                        <div className="availabilities-description">
                            Updated ratings of this location
                        </div>
                            <div className="view_ratings">
                            <Typography component="legend">accuracy</Typography>
                            <Rating name="read-only" value={accuracy} readOnly />

                            <Typography component="legend">communication</Typography>
                            <Rating name="read-only" value={communication} readOnly />

                            <Typography component="legend">cleanliness</Typography>
                            <Rating name="read-only" value={cleanliness} readOnly />
                            
                            <Typography component="legend">location</Typography>
                            <Rating name="read-only" value={locationReview} readOnly />

                            <Typography component="legend">check-in</Typography>
                            <Rating name="read-only" value={checkIn} readOnly />

                            <Typography component="legend">value</Typography>
                            <Rating name="read-only" value={value} readOnly />
                            </div>
                            
                            {reviewList}
                        </div>
                        <div className="arena-show-map-container">
                            <div className="show-map-title">
                                The Neighborhood
                            </div>
                            {<ViewMap lat={listing.locationTag[0].lat}
                                lng={listing.locationTag[0].lng} />}
                                {/* {console.log("here?", listing)} */}
                            <div className="show-map-description">
                                Exact location information is provided after a booking is confirmed.
                            </div>
                        </div>

                    </div>

                    {/* <form className="arenas-booking-form" onSubmit={this.handleSubmit}> */}
                    <form className="arenas-booking-form" >
                        <div className="arenas-booking-pricing">
                            <div className="booking-dollars">${listing.Price}</div>
                            <div className="booking-per-day">/ day</div>
                        </div>
                        <div className="booking-rating">
                            <div className="booking-star">
                    <p>{<StarIcon />}4.85 (99+ reviews)</p>
                            </div>
                        </div>
                        <div className="booking-dates">
                            {/* <DateRangePicker
                                startDate={startDate}
                                startDateId="mm/dd/yyyy"
                                endDate={endDate}
                                endDateId="mm/dd/yyyy"
                                onDatesChange={({ startDate, endDate }) => changeDate({ startDate, endDate })}
                                focusedInput={focusedInput}
                                onFocusChange={focusedInput => changeFocus({ focusedInput })}
                                numberOfMonths={1}
                                hideKeyboardShortcutsPanel={true}
                                startDatePlaceholderText="Check-in"
                                endDatePlaceholderText="Check-out"
                                block={true}
                                noBorder={false}
                            /> */}
                            {/* <DatePicker /> */}
                            <DateRangePicker
                                startDate={this.state.startDate}
                                startDateId="mm/dd/yyyy"
                                endDate={this.state.endDate}
                                endDateId="dd/mm/yyyy"
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                numberOfMonths={1}
                                hideKeyboardShortcutsPanel={true}
                                startDatePlaceholderText="Check-in"
                                endDatePlaceholderText="Check-out"
                                block={true}
                                noBorder={false}
                            />
                        </div>
                        <DropDown arrowType="bookingArrow" numGuests={this.numGuests} />
                        <div className="booking-reserve-button">
                            
                            {user && <Button variant="outlined" className="reserve_button" onClick={this.handleReserve}>Reserve</Button>}
                            {!user && <Button variant="outlined" className="login_reserve_button" onClick={this.handleLoginClick}>Log in to Reserve</Button> }
                            {/* {this.props.user.logged === undefined && <Button variant="outlined" className="login_reserve_button">Log in to Reserve</Button> } */}
                            
                            <ViewLogin open={this.state.showLogin} />
                            <p>Just a demo. Your money is safe.</p>
                        </div>
                    </form>
                </div>
            </div>
    )}
}
const msp = (state, ownProps) => {
    return ({
        // currentUser: state.entities.users[state.session.id],
        // arena: state.entities.arenas[ownProps.match.params.arenaId]
        originalList: state.originalList,
        user: state.user
    });
};

const mdp = dispatch => {
    return ({
        // openModal: modal => dispatch(openModal(modal)),
        // createBooking: booking => dispatch(createBooking(booking)),
        fetchListings: () => dispatch(fetchListings())
    });
}

// export default ViewPage
export default withRouter(connect(msp, mdp)(ViewPage));


