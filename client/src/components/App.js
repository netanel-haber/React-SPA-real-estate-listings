import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { BreakpointsProvider } from 'react-with-breakpoints';
import { large, medium, small, xlarge } from '../styles/base/_base.scss';
import '../styles/components/App.scss';
import Header from './Header';
import ListingTypeRouter from './ListingTypeRouter';
import { AddListing, HomePage, Login, MyProfile, NotFound, Personal, Signup } from './pages/pageIndex';
import { paths } from './pages/paths';


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
            <Route path={paths.listings}>
              <ListingTypeRouter />
            </Route>
            <Route path={paths.personal}>
              <Personal />
            </Route>
            <Route path={paths.login}>
              <Login />
            </Route>
            <Route path={paths.logout}>
              <Redirect to="/" />
            </Route>
            <Route path={paths.myProfile}>
              <MyProfile />
            </Route>
            <Route path={paths.signup}>
              <Signup />
            </Route>
            <Route path={paths.addListing}>
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
