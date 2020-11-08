import React, {useState} from 'react'
import '../styling/banner.css'
import { Button } from "@material-ui/core"
import Search from './Search'
import { useHistory } from 'react-router-dom'

function Banner() {
    //keeps a record or history of pages you've been at
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false)


    return (
        <div className='banner'>
            <div className="banner_search">
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" searchvariant="outlined">
                    {showSearch ? "Hide" : "Click Here to Search Dates"}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems
                    near you.
                </h5>
                <Button variant="outlined" onClick={()=> history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
