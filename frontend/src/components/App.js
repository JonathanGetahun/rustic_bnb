import React from 'react';
import '../styling/App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Start from './Start'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    
    //BEM
    <div className="App">

    <Router>
      <Header />
      <Switch>
         <Route path="/search">
          <SearchPage />
         </Route>
         
         <Route path ="/home">
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
