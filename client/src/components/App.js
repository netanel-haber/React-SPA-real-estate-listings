import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/components/App.scss';
import Header from './Header';
import {
AddListing, Commercial, ForSale, HomePage,
  // Signup,
  Login, NotFound, Personal, Rent, Roommates
} from './pages/pageIndex';




const App = () => {
  useEffect(() => {
    fetch("/api/test")
      .then(res => res.text()).then(test => {
        console.log(`received api test (${test}) from back-end.`);
      })
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/forsale">
            <ForSale date={Date.now()} />
          </Route>
          <Route path="/rent">
            <Rent />
          </Route>
          <Route path="/commercial">
            <Commercial />
          </Route>
          <Route path="/roommates">
            <Roommates />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/add-listing">
            <AddListing />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}



export default App;
