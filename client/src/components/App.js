import React from 'react';
import '../styles/components/App.scss';
import Item from './Item';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';

import Commercial from './pages/Commercial';
import ForSale from './pages/ForSale';
import Rent from './pages/Rent';
import Roommates from './pages/Roommates';

class App extends React.Component {


  componentDidMount() {
    fetch("/api/test")
      .then(res => res.text()).then(test => {
        console.log(test);
      })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header></Header>
          <Route exact path="/forsale">
            <ForSale></ForSale>
          </Route>
          <Route exact path="/rent">
            <Rent></Rent>
          </Route>
          <Route exact path="/roommates">
            <Roommates></Roommates>
          </Route>
          <Route exact path="/commercial">
            <Commercial></Commercial>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
