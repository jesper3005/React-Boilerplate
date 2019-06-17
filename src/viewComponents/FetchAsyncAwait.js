import React, { Component } from 'react';
import CompForData from './ComponentForData'

class FetchWithAsyncAwait extends Component {
    state = { 
        amount: '',
        data: []
     }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.getData();
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value})
    }

    getData = async () => {
        const {} = this.state;
        var url = ``;
        const data = await fetch(url).then(handleHTTPErrors)
        this.setState({ data: data})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Maybe just press to get data?</button>
                    <h1>Fetched data, not mapped:</h1>
                    <p>{this.state.data}</p>
                    <CompForData data={this.state.data}/>
                </form>
            </div>
        );
    }
}

export default FetchWithAsyncAwait;

function handleHTTPErrors(res) {
    if(!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}