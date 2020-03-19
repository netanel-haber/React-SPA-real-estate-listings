import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BreakpointsProvider } from 'react-with-breakpoints';
import { large, medium, small, xlarge } from '../styles/base/_base.scss';
import '../styles/components/App.scss';
import Header from './header/Header';
import ListingTypeRouter from './ListingTypeRouter';
import { HomePage, NotFound } from './pages/pageIndex';
import { paths } from './pages/paths';
import ListersRouter from './pages/routers/ListersRouter';


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
            <ListersRouter />
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
