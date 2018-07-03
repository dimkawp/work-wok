import React, { Component } from 'react';
import './Home.css';
//Components
import Header from './HomeComponents/Header';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Header />
            </div>
        );
    }
}

export default Home;
