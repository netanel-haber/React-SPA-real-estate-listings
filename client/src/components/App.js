import {
  Commercial,
  ForSale,
  Rent,
  Roommates,
  HomePage,
  // Signup,
  Login,
  AddListing,
  Personal,
  NotFound
} from './pages/pageIndex';

import React from 'react';
import '../styles/components/App.scss';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {
    fetch("/api/test")
      .then(res => res.text()).then(test => {
        console.log(`received api test (${test}) from back-end.`);
      })
  }
  render() {
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
              <Commercial/>
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
    );
  }
}



export default App;
