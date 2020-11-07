import React from 'react'
import '../styling/home.css'
import Card from './Card'
import Banner from './Banner'
import { refreshLocation } from '../services/listingServices'
import { Link } from 'react-router-dom'

function Home() {

    //use this to generate new AWS image ID's
    refreshLocation()


    return (
        <div className="home">
            <Banner /> 

            <div className="home_section">
            <Link to={{pathname: `/search/1`}} style={{ textDecoration: 'none', color: 'black' }}>
            <Card 
                    
                    src="https://a0.muscache.com/im/pictures/22216b32-9a48-44e1-8747-b8acc23ddea3.jpg?im_w=1440"
                        title="Treehouses"
                        description="Comfortable private places, with 
                        room for friends or family."
                    />
                </Link>
                <Link to={{pathname: `/search/0`}} style={{ textDecoration: 'none', color: 'black' }}>
                <Card 
                    
                    src="https://a0.muscache.com/im/pictures/8a0172fb-46e9-4425-b652-dcf20a7d3ebd.jpg?im_w=1440"
                    title="Tents"
                    description="Spaces that are more than just a place to sleep."/>
                    </Link>
                    <Link to={{pathname: `/search/3`}} style={{ textDecoration: 'none', color: 'black' }}>
                <Card 
                    src="https://a0.muscache.com/im/pictures/c4cae76b-9680-4310-bd34-a176b7fd4255.jpg?im_w=1440"
                    title="Exotic Feel"
                    description="Places you never imagined existed."/>
                    </Link>
            </div>
            <div className="home_section">
            <Link to={{pathname: `/search/4`}} style={{ textDecoration: 'none', color: 'black' }}>
                <Card 
                    
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-24162102/original/11f43592-765e-423d-af50-02d30057ca7b.jpeg?aki_policy=xx_large"
                    title="The Paddle Inn"
                    description="Abundant privacy is yours at this Island paradise on beautiful Cassadaga Lakes."/>
            </Link>
            <Link to={{pathname: `/search/8`}} style={{ textDecoration: 'none', color: 'black' }}>
                <Card 
                    
                    src="https://a0.muscache.com/im/pictures/b7219d2c-647c-4fdb-b0a2-aed6520d9f38.jpg?aki_policy=xx_large"
                    title="Dream Rock Silo"
                    description="A unique experience to get a 360 view of mountains, an ocean, and much more all on top of a renovated silo!"/>
            </Link> 
            <Link to={{pathname: `/search/5`}} style={{ textDecoration: 'none', color: 'black' }}>
                <Card 
                    src="https://a0.muscache.com/im/pictures/8fe21806-e4bf-42b0-8957-940549706482.jpg?aki_policy=xx_large"
                    title="Earth house"
                    description="Nestled in the valley of the Blue Ridge Mountains, this secluded Hobbit House makes the perfect private getaway."/>
                    </Link>
            </div>
        </div>

    )
}
 
export default Home