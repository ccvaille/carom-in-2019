import React from 'react';
import { Router, Route } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

import SignUp from '../../ui/SignUp';
import LogIn from '../../ui/LogIn';
import Home from '../../ui/Home';

export const renderRoutes = () => {
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
    </Router>
}

