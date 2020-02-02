import {Commercial, 
  ForSale, 
  Rent, 
  Roommates, 
  HomePage, 
  Signup, 
  Login, 
  AddListing,
  Personal
} from './pages/pageIndex';

import React from 'react';
import '../styles/components/App.scss';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';


const RouteShortHand = ({ path, page }) => (
  <Route exact path={path}>{page}</Route>
);


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
          <Route exact path="/forsale">
                <ForSale/>
          </Route>
          <Route exact path="/rent">
                <Rent/>
          </Route>
          <Route exact path="/commercial">
                <Commercial/>
          </Route>
          <Route exact path="/roommates">
                <Roommates/>
          </Route>
          <Route exact path="/personal">
                <Personal/>
          </Route>
          <Route exact path="/login">
                <Login/>
          </Route>
          <Route exact path="/add-listing">
                <AddListing/>
          </Route>
          <Route exact path="/">
              <HomePage/>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
