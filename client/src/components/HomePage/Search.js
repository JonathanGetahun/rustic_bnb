import React, { useState} from 'react';
import '../../styling/search.css';
//main style file
import 'react-date-range/dist/styles.css';
//theme css file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import  PeopleIcon  from '@material-ui/icons/People'
import { useHistory } from 'react-router-dom'

//date picker component
//react-date-range
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState (new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.startDate);
    }

    return (
        <div className='search'>
            <div className='pickle'>
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            </div>
            
            <h3>
                Number of guests
                <PeopleIcon />
            </h3>
            <input min={0}
            defaultValue={2}
            type="number" />
            <Button onClick={() => history.push('/search')}>Search rustic_bnb</Button>
        </div>
    )
}

export default Search
