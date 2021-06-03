import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BeforeLogin from '../components/BeforeLogin';
import AfterLogin from '../components/AfterLogin';

const AppRouter = () => (
    <BrowserRouter>
        <Route path="/" component={BeforeLogin} exact={true} />
        <Route path="/main" component={AfterLogin} />
    </BrowserRouter>
);

export default AppRouter;