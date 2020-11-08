import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import 'react-dates/lib/css/_datepicker.css';
import './datepicker_override_show.css'


export default class DatePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE,
            bookedDates: [],
            focused: null,
            guests: 1
        };
        
    }
    numGuests(n) {
        this.setState({ guests: n });
    }

    onFocusChange() {
        this.setState({
            focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
        });
    }
    render() {
        return (
            <div>
               <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="mm/dd/yyyy"
                    endDate={this.state.endDate}
                    endDateId="mm/dd/yyyy"
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
        )
    }
}
