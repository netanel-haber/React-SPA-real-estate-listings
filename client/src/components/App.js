import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/components/App.scss';
import Header from './Header';
import ListingTypeRouter from './ListingTypeRouter';
import { AddListing, HomePage, Login, NotFound, Personal, Signup, MyProfile } from './pages/pageIndex';
import { BreakpointsProvider } from 'react-with-breakpoints';
import { small, medium, large, xlarge } from '../styles/base/_base.scss';



const App = () => {
  useEffect(() => {
    fetch("/api/test")
      .then(res => res.text()).then(test => {
        console.log(`received api test (${test}) from back-end.`);
      })
  }, [])
  return (
    <BreakpointsProvider breakpoints={{ small, medium, large, xlarge }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/listings/:type">
              <ListingTypeRouter />
            </Route>
            <Route path="/personal">
              <Personal />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/my-profile">
              <MyProfile />
            </Route>
            <Route path="/signup">
              <Signup />
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
    </BreakpointsProvider>

  )
}



export default App;
