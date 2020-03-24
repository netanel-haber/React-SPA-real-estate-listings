import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { paths } from '../paths';
import { AddListing, Login, MyListings, Signup } from '../pageIndex';
import withAuth from './../../withAuth';


const ListersRouter = (
    [
        <Route key={1} path={paths.login}>
            <Login />
        </Route>,
        <Route key={2} path={paths.logout}>
            <Redirect to="/" />
        </Route>,
        <Route key={3} path={paths.myListings}>
            {withAuth(<MyListings />)}
        </Route>,
        <Route key={4} path={paths.signup}>
            <Signup />
        </Route>,
        <Route key={5} path={paths.addListing}>
            {withAuth(<AddListing />)}
        </Route>
    ]
);



export default ListersRouter;