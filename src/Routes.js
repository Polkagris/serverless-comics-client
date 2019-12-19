import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';


function Routes() {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            { /* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes
