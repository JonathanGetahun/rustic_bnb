import React from 'react'
import './home.css'
import Card from './Card'
import Banner from './Banner'


function Home() {
    return (
        <div className="home">
            <Banner /> 

            <div className="home_section">
                <Card 
                    
                    src="https://a0.muscache.com/im/pictures/9b6849e6-019b-46a5-a7d5-98736dcdeed2.jpg?im_w=1200"
                        title="Treehouses"
                        description="Comfortable private places, with 
                        room for friends or family"
                    />
                <Card 
                    
                    src="https://a0.muscache.com/im/pictures/8a0172fb-46e9-4425-b652-dcf20a7d3ebd.jpg?im_w=1440"
                    title="Tents"
                    description="Lets see if this works"/>
                <Card 
                    src="https://a0.muscache.com/im/pictures/c4cae76b-9680-4310-bd34-a176b7fd4255.jpg?im_w=1440"
                    title="Exotic Feel"
                    description="Nope?"/>
            </div>
            <div className="home_section">
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}
 
export default Home