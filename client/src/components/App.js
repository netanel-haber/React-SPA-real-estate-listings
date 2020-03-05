import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/components/App.scss';
import Header from './Header';
import ListingTypeRouter from './ListingTypeRouter';
import { AddListing, HomePage, Login, NotFound, Personal, Signup } from './pages/pageIndex';

toast.configure();


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
          <Route path="/listings/:type">
            <ListingTypeRouter />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/login">
            <Login />
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
  )
}



export default App;
