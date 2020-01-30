import {Commercial, 
  ForSale, 
  Rent, 
  Roommates, 
  HomePage, 
  Signup, 
  Login, 
  AddListing} from './pages/pageIndex';
import React from 'react';
import '../styles/components/App.scss';
import Item from './Item';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';



const RouteShortHand = ({ path, page }) => (
  <Route exact path={path}>{page}</Route>
);


class App extends React.Component {

  componentDidMount() {
    fetch("/api/test")
      .then(res => res.text()).then(test => {
        console.log(test);
      })
  }
  render() {
    console.log(HomePage);
    return (
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <RouteShortHand path="/" page={<HomePage />} />
          <RouteShortHand path="/forsale" page={<ForSale />} />
          <RouteShortHand path="/rent" page={<Rent />} />
          <RouteShortHand path="/commercial" page={<Commercial />} />
          <RouteShortHand path="/roommates" page={<Roommates />} />
          <RouteShortHand path="/personal" page={<Personal />} />
          <RouteShortHand path="/login" page={<Login />} />
          <RouteShortHand path="/add-listing" page={<AddListing />} />
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
