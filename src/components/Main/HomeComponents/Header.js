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
//Icons
import ArrowDown from 'react-icons/lib/go/arrow-down';
//Img
import Logo from '../../../assets/img/logo.png';
//Anchor
import ScrollableAnchor from 'react-scrollable-anchor';
//Scroll
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
//VideoBG
import VideoBG from '../../../assets/img/Video/Darkness.mp4';

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
                $('#head').css({transition: "2s", position: "fixed", left: "0", right: "0", backgroundImage: "(../../../assets/img/fire.jpg)",justifyContent: "center",clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)"});
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
                    <div className="info-1">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="info-2">
                        <p>- Покупаем пивные кеги <br/> <strong>дорого</strong>  </p>
                    </div>
                    <div className="info-3">
                        <p>- Звони и називай свою цену</p>

                    </div>
                    <div className="info-4">
                        <br/>
                        <p>+38 <span>(067)</span>-931-17-45</p>
                        <span>elefantenko@gmail.com</span>
                    </div>
                    <div className="info-5">
                        <br/>
                        <p>Работаем по всей украине</p>
                    </div>
                </div>
                <nav id="head">
                    <div id="navigation">
                        <div className="items" >
                            <div className="item" onClick={this.HomePage}>
                                <div className="hover"></div>
                                <a onClick={() => scroll.scrollTo(100)}>Главная</a>
                            </div>
                            <div className="item" onClick={this.Page50}>
                                <div className="hover"></div>
                                <a onClick={() => scroll.scrollTo(100)}>Кеги 50 л</a>
                            </div>
                            <div className="item" onClick={this.Page30}>
                                <div className="hover"></div>
                                <a onClick={() => scroll.scrollTo(100)}>Кеги 30 л</a>
                            </div>
                            <div className="item" onClick={this.Page20}>
                                <div className="hover"></div>
                                <a onClick={() => scroll.scrollTo(100)}>Кеги 20 л</a>
                            </div>
                            <div className="item" onClick={this.PageInfo}>
                                <div className="hover"></div>
                                <a onClick={() => scroll.scrollTo(100)}>Фитинги</a>
                            </div>
                            <div className="item" onClick={this.PagePrice}>
                                <div className="hover"></div>
                                <a onClick={() => scroll.scrollTo(100)}>Цены</a>
                            </div>
                        </div>
                        <div className="search">Поиск</div>
                    </div>
                    <div><button><a onClick={() => scroll.scrollMore(150)}><ArrowDown size={50}/></a></button></div>
                </nav>
                <div className="content">
                    <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="myVideo" playsInline autoPlay muted loop>
                        <source src={VideoBG} type="video/webm"/>
                        <source src={VideoBG} type="video/mp4"/>
                    </video>
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
