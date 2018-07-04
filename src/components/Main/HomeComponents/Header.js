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
            if ($(this).scrollTop() >= 100) {
                $('#info').hide();
                $('#head').css({transition: "1s", position: "fixed", left: "0", right: "0", background: "#2B2D49",justifyContent: "center",clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)"});
                $('#navigation').css({height: "50px",justifyContent: "center"});
            }
            else {
                $('#info').show();
                $('#head').css({position: "relative", background: "",justifyContent: "space-around"});
                $('#navigation').css({height: "500px",justifyContent: "space-around"});
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
                <div id="info">
                    <div className="info1">
                        info1
                    </div>
                    <div className="info1">
                        info1
                    </div>
                    <div className="info1">
                        info1
                    </div>
                </div>
                <nav id="head">
                    <div id="navigation">
                        <div className="items" >
                            <div className="item" onClick={this.HomePage}>HomePage</div>
                            <div className="item" onClick={this.Page50}>Page50</div>
                            <div className="item" onClick={this.Page30}>Page30</div>
                            <div className="item" onClick={this.Page20}>Page20</div>
                            <div className="item" onClick={this.PageInfo}>PageInfo</div>
                            <div className="item" onClick={this.PagePrice}>PagePrice</div>
                        </div>
                        <div className="search">search</div>
                    </div>
                    <div><button>BUTTON</button></div>
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
                <footer>
                    <div className="footer">
                        footer
                    </div>
                </footer>
            </div>
        );
    }
}

export default Header;
