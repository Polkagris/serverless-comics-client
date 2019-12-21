import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import AppliedRoute from './components/AppliedRoute';



function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            { /* Finally, catch all unmatched routes */}
            <AppliedRoute component={NotFound} />
        </Switch>
    )
}

export default Routes;
