import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import BeforeLogin from '../components/BeforeLogin';
import AfterLogin from '../components/AfterLogin';

export const history = createHistory();

const AppRouter = (props) => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/before" component={BeforeLogin} />
                    <Route path="/home" component={AfterLogin} />
                </Switch>
            </div>
        </Router>
    )
}
/*
<PublicRoute path="/" component={LoginPage} exact={true} />
<PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
<PrivateRoute path="/create" component={AddExpensePage} />
<PrivateRoute path="/edit/:id" component={EditExpensePage} />
<Route component={NotFoundPage} />
*/
export default AppRouter;