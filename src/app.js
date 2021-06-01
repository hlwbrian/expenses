const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter, Route, Switch} = require('react-router-dom');

const target = document.getElementById('app');

const PageOne = () => {
    return (
        <h3>Page 1</h3>
    );
}

const PageTwo = () => {
    return (
        <h3>Page 2</h3>
    );
}

const PageDefault = () => {
    return (
        <h3>Default Page</h3>
    );
}

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>               
                <Route path="/one" component={PageOne} />
                <Route path="/two" component={PageTwo} />
                <Route path="/" component={PageDefault} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Router />, target);

