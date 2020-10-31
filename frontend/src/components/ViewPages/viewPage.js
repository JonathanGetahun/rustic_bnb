import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import '../../styling/viewPage.css'
import { fetchListings } from '../../actions/listing_actions'
import Button from '@material-ui/core/Button';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import WifiIcon from '@material-ui/icons/Wifi';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import KitchenSharpIcon from '@material-ui/icons/KitchenSharp';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import moment from 'moment'
import { DateRangePicker, DayPickerRangeController } from 'react-dates';

function ViewPage(props) {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchListings())
         
    }, [])

    console.log(props.location.state)
    // const originalList = useSelector(state => state.list)
    // locationId = props.location.state.id
    let pictures;
    let amenities;
    
        
             pictures = props.location.state.img.map((pics,i) => {
                if(i == 0) {
                    return;
                }
                return <div className="arena-sub-pic" key={i}>
                <img
                    src={pics}
                    alt={`pic-${i}`}
                />
                </div>
            })
        
            amenities = props.location.state.amenities.map((things,i) => {
                return <li key={i}>{things}</li>
            })
    

    return (
<div className="arena-details-container">
                    <div className="arena-title-city-pics">
                        <div className="arena-pics">
                            <div className="arena-main-pic">
                                <img src={props.location.state.img[0]} alt="main-photo" />
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
                                    {props.location.state.title}
                                    </div>
                                    <div className="gm-pic-container">
                                        <Button variant="contained" color="primary">{props.location.state.host} </Button>
                                    </div>
                                </div>

                                {props.location.state.location}
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
                                    <StarsTwoToneIcon /> {props.location.state.host} is a Superhost</div>
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
                                {props.location.state.description}
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
                            Enter your desired hoop dates for accurate pricing and availability.
                        </div>
                        {/* <DayPickerRangeController
                                // startDate={this.state.startDate}
                                // endDate={this.state.endDate}
                                // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                // focusedInput={this.state.focusedInputLeftCol}
                                // onFocusChange={this.onFocusChange}
                                // initialVisibleMonth={() => moment().add(0, "M")}
                                // numberOfMonths={2}
                                // // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                                // hideKeyboardShortcutsPanel={true}
                        /> */}
                        </div>
                        <div className="arena-show-map-container">
                            <div className="show-map-title">
                                The Neighborhood
                            </div>
                            {/* <ArenaShowMap arena={this.props.arena} /> */}
                            <div className="show-map-description">
                                Exact location information is provided after a booking is confirmed.
                            </div>
                        </div>

                    </div>

                    {/* <form className="arenas-booking-form" onSubmit={this.handleSubmit}> */}
                    <form className="arenas-booking-form" >
                        <div className="arenas-booking-pricing">
                            {/* <div className="booking-dollars">${this.props.arena.price}</div> */}
                            <div className="booking-per-day">/ day</div>
                        </div>
                        <div className="booking-rating">
                            <div className="booking-star">
                                <i className="fas fa-star" />
                                4.85 (99+ reviews)
                            </div>
                        </div>
                        <div className="booking-dates">
                            {/* <DateRangePicker
                                // startDate={this.state.startDate}
                                // startDateId="mm/dd/yyyy"
                                // endDate={this.state.endDate}
                                // endDateId="mm/dd/yyyy"
                                // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                // focusedInput={this.state.focusedInput}
                                // onFocusChange={focusedInput => this.setState({ focusedInput })}
                                // numberOfMonths={1}
                                // hideKeyboardShortcutsPanel={true}
                                // startDatePlaceholderText="Check-in"
                                // endDatePlaceholderText="Check-out"
                                // block={true}
                                // noBorder={false}
                            // isDayBlocked={day => this.dayBlocked(day)}
                            /> */}
                        </div>
                        {/* <HoopersDropDown arrowType="bookingArrow" numHoopers={this.numHoopers} /> */}
                        <div className="booking-reserve-button">
                            {/* {bookingHasUser} */}
                            <p>You won't be charged. Pinky promise.</p>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default ViewPage
