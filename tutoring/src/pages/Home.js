import React, { Component } from 'react';
import styles from './css/home.module.css'

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
                <p>
                This is the home page
                </p>
            </header>
            </div>
        );
    }
}

export default Home;