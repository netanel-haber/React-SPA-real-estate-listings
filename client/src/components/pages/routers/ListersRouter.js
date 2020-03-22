import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { paths } from '../paths';
import { AddListing, Login, MyProfile, Signup } from '../pageIndex';
import withAuth from './../../withAuth';


const ListersRouter = () => {
    return (
        <>
            <Route path={paths.login}>
                <Login />
            </Route>
            <Route path={paths.logout}>
                <Redirect to="/" />
            </Route>
            <Route path={paths.myProfile}>
                {withAuth(<MyProfile />)}
            </Route>
            <Route path={paths.signup}>
                <Signup />
            </Route>
            <Route path={paths.addListing}>
                {withAuth(<AddListing />)}
            </Route>
        </>
    )
}


export default ListersRouter;