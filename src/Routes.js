import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import AppliedRoute from './components/AppliedRoute';
import Signup from './containers/Signup';
import NewComic from './containers/NewComic';



function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
            <AppliedRoute path="/comics/new" exact component={NewComic} appProps={appProps} />
            { /* Finally, catch all unmatched routes */}
            <AppliedRoute component={NotFound} />
        </Switch>
    )
}

export default Routes;
