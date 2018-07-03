import React, { Component } from 'react';
import './Header.css';
//Semantic ui
import { Tab } from 'semantic-ui-react';
//JQ
import $ from 'jquery';
//Components
import MainPage from "./Tabs/MainPage";
import Page50 from "./Tabs/Page50";
import Page30 from "./Tabs/Page30";
import Page20 from "./Tabs/Page20";
import PageInfo from "./Tabs/PageInfo";
import PagePrice from "./Tabs/PagePrice";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HomePage: true,
            Page50: false,
            Page30: false,
            Page20: false,
            PageInfo: false,
            PagePrice: false
        }
    }
    componentDidMount() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {
                $('#head').css({transition: "1s", position: "fixed", left: "0", right: "0", background: "#2B2D49"});
                $('#navigation').css({height: "50px",justifyContent: "flex-start"});
            }
            else {
                $('#head').css({position: "relative", background: ""});
                $('#navigation').css({height: "100px",justifyContent: "center"});
            }
        });
    }
    HomePage = () => {
        this.setState({HomePage: true,Page50: false,Page30: false,Page20: false,PageInfo: false,PagePrice: false});
    }
    Page50 = () => {
        this.setState({HomePage: false,Page50: true,Page30: false,Page20: false,PageInfo: false,PagePrice: false});
    }
    Page30 = () => {
        this.setState({HomePage: false,Page50: false,Page30: true,Page20: false,PageInfo: false,PagePrice: false});
    }
    Page20 = () => {
        this.setState({HomePage: false,Page50: false,Page30: false,Page20: true,PageInfo: false,PagePrice: false});
    }
    PageInfo = () => {
        this.setState({HomePage: false,Page50: false,Page30: false,Page20: false,PageInfo: true,PagePrice: false});
    }
    PagePrice = () => {
        this.setState({HomePage: false,Page50: false,Page30: false,Page20: false,PageInfo: false,PagePrice: true});
    }
    render() {
        return (
            <div className="Header">
                <nav id="head">
                    <div id="navigation" className="items">
                        <div className="item" onClick={this.HomePage}>HomePage</div>
                        <div className="item" onClick={this.Page50}>Page50</div>
                        <div className="item" onClick={this.Page30}>Page30</div>
                        <div className="item" onClick={this.Page20}>Page20</div>
                        <div className="item" onClick={this.PageInfo}>PageInfo</div>
                        <div className="item" onClick={this.PagePrice}>PagePrice</div>
                    </div>
                </nav>
                <div className="content">
                    {
                        this.state.HomePage === true &&
                        <MainPage/>
                    }
                    {
                        this.state.Page50 === true &&
                        <Page50/>
                    }
                    {
                        this.state.Page30 === true &&
                        <Page30/>
                    }
                    {
                        this.state.Page20 === true &&
                        <Page20/>
                    }
                    {
                        this.state.PageInfo === true &&
                        <PageInfo/>
                    }
                    {
                        this.state.PagePrice === true &&
                        <PagePrice/>
                    }
                </div>
            </div>
        );
    }
}

export default Header;
