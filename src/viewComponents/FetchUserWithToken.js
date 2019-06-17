import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import '../App.css';
import FetchDataWithToken, { SW5 } from "./FetchDataWithToken";

export default class UserPage extends Component {
    state = { userPage: [] };

    fetchPage = async () => {
        //URL TIL AT HENTE USERDATA
        const url = "";
        const getHeader = {
            headers: {
                "x-access-token": this.props.superState.token
            }
        };

        const data = await fetch(url, getHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | You are not logged in as a User!"); }
            return res.json();
        }).then(data => {
            return data.msg;
        }).catch(error => {
            console.log(error);
            return error.message;
        });

        this.setState({ userPage: data });
    }

    componentDidMount() {
        this.fetchPage();
    }

    render() {
        return (
            <Router >
                <div>
                    <Header />
                    <h2>User page</h2>
                    <p>{this.state.userPage}</p>
                    <Switch>
                        <Route path="/userPage/getOne" render={() => <FetchDataWithToken superState={this.props.superState} />} />
                        <Route path="/userPage/getFive" render={() => <SW5 superState={this.props.superState} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Header() {
    return (
        <ul className="header">
            <li><NavLink activeClassName="active" to="/userPage/getOne">Get One</NavLink></li>
            <li><NavLink activeClassName="active" to="/userPage/getFive">Get Five</NavLink></li>
        </ul>
    )
};