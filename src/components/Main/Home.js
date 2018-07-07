import React, { Component } from 'react';
import './Home.css';
//Components
import Header from './HomeComponents/Header';
import Preloader from "./Preloader";

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Preloader />
                <Header />
            </div>
        );
    }
}

export default Home;
