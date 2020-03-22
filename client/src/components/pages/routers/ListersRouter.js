import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { paths } from '../paths';
import { AddListing, Login, MyProfile, Signup } from '../pageIndex';

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
                <MyProfile />
            </Route>
            <Route path={paths.signup}>
                <Signup />
            </Route>
            <Route path={paths.addListing}>
                <AddListing />
            </Route>
        </>
    )
}


export default ListersRouter;