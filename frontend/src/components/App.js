import React from 'react';
import '../styling/App.css';
import { Provider } from 'react-redux'
import store from '../reduxStore'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPageContainer from './SearchPageContainer'
import Start from './Start'
import Example from './example'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
  <Provider store={store}>
    
    <div className="App">

    <Router>
      <Header />
      <Switch>
        <Route path="/search/list">
          <Example />
        </Route>
         <Route path="/search">
          <SearchPageContainer />
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
    </Provider>
  )
}

export default App;
