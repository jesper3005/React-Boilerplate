import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import './App.css';
import Login from "./viewComponents/Login";
import FetchUserWithToken from "./viewComponents/FetchUserWithToken";
import FetchAsyncAwait from './viewComponents/FetchAsyncAwait';

export default class App extends Component {
    state = { token: "" };

    //Send down to the page where you need to set state via props
    handleState = (token) => {
        this.setState( { token: token })
    }

    //How to send it down a Route
    //<Route path="/login" render={() => <Login handleToken={this.handleToken} />} />


    render() {
        return (
            <Router >
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/fetchUserWithToken" render={() => <FetchUserWithToken superState={this.state} />} />
                        <Route path="/login" render={() => <Login superState={this.state} />} />
                        <Route path="/fetchAsyncAwait" render={() => <FetchAsyncAwait />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router >
        );
    };
}

function Header() {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/fetchUserWithToken">FetchUserWithToken</NavLink></li>
            <li><NavLink activeClassName="active" to="/fetchAsyncAwait">FetchAsyncAwait</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>

        </ul>
    )
};

function Home() {
    return (
        <h2>Home</h2>
    )
};

function NoMatch() {
    return (
        <h2>404 - Page not found!</h2>
    )
};