import React from 'react'
import '../styling/home.css'
import Card from './Card'
import Banner from './Banner'


function Home() {
    return (
        <div className="home">
            <Banner /> 

            <div className="home_section">
                <Card 
                    
                    src="https://a0.muscache.com/im/pictures/22216b32-9a48-44e1-8747-b8acc23ddea3.jpg?im_w=1440"
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