import React, { Component } from 'react';
import '../App.css';

export default class FetchDataWithToken extends Component {
    state = { data: [], error: [] };

    getData = async () => {
        const id = 10;
        const url = ``;
        const getHeader = {
            headers: {
                "x-access-token": this.props.superState.token
            }
        };

        const data = await fetch(url, getHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | A problem occurred!"); }
            return res.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.log(error);
            alert(error);
        });

        this.setState({ data: data });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <h2>Get One</h2>
                {/* <p>{this.state.data.map(char => char.name + ": " + char.gender)}</p> */}
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export class SW5 extends Component {
    state = { data: [] };

    getData = async () => {
        const url = "";
        const getHeader = {
            headers: {
                "x-access-token": this.props.superState.token
            }
        };

        const data = await fetch(url, getHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | A problem occurred!"); }
            return res.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.log(error);
            alert(error);
        });

        this.setState({ data: data });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <h2>Get One</h2>
                {/* <p>{this.state.data.map(char => char.name + ": " + char.gender)}</p> */}
                <p>{this.state.data}</p>
            </div>
        );
    }
}