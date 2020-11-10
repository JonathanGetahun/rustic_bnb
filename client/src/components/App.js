import React, { useEffect } from 'react';
import '../styling/App.css';


import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Start from './Start'
// import Example from './example'
import ViewPage from './ViewPages/viewPage'
import Bookings from './Bookings/Bookings'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { loggedIn } from '../actions/user_actions'
import { getCurrentUser } from '../services/userServices'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if(getCurrentUser()){
      dispatch(loggedIn())
    }
  }, [dispatch])

  return (
  
    
    <div className="App">

    <Router>
      
      <Switch>
      <Route path="/users/:id">
        <Header />
        <Bookings />
        </Route>
        {/* <Route path="/search/list">
          <Example />
        </Route> */}
        <Route path="/search/:id" component={() => (<div><Header /><ViewPage /></div>)} />
        {/* <Route path="/search/:id" render={(props) => <ViewPage {...props}/>}> */}
        
         <Route path="/search">
         <Header />
          <SearchPage />
         </Route>

         <Route path ="/home">
         <Header />
          <Home />
         </Route>
         <Route path = "/">
           <Start />
         </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
   
  )
}

export default App;
