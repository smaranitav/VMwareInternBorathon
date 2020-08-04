import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
    
        }
    }

    handleSubmit = () => {
        //this is the easiest way to create a function without having to bind it
    }
    
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                This is the home page
                </p>
            </header>
            </div>
        );
    }
}

export default Home;