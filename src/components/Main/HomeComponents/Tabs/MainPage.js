import React, { Component } from 'react';
import './MainPage.css';
import { Container, Grid, Form, Input, Segment, TextArea, Button, Loader, Dimmer } from 'semantic-ui-react';
//Scroll
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
//Icons
import Question from 'react-icons/lib/fa/question';
import Work from 'react-icons/lib/md/work';
import Phone from 'react-icons/lib/md/settings-phone';
import Phone2 from 'react-icons/lib/fa/phone';
import Message from 'react-icons/lib/md/message';
import Star from 'react-icons/lib/fa/star';
import LineChart from 'react-icons/lib/fa/line-chart';
import Map from 'react-icons/lib/fa/map-marker';
import MasterCard from 'react-icons/lib/fa/cc-mastercard';
import Like from 'react-icons/lib/fa/thumbs-up';
import Money from 'react-icons/lib/fa/money';
import Buss from 'react-icons/lib/fa/bus';
import Facebook from 'react-icons/lib/fa/facebook-official';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            formMail: '',
            formPrice: '',
            formText: '',
            formSubmitBtnDisabled: true,
            buttonLoading: false,
            responseForm: ''
        }
    }
    ChangeFormName = (event) => {
        this.setState({formName: event.target.value});
    }
    ChangeFormPrice = (event) => {
        this.setState({formPrice: event.target.value});
    }
    ChangeFormMail = (event) => {
        this.setState({formMail: event.target.value});
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.formMail) === true) {
            console.log('valid - ', event.target.value);
            this.setState({formSubmitBtnDisabled: false});
        }
        else {
            console.log('InValid - ', event.target.value);
            this.setState({formSubmitBtnDisabled: true});
        }
    }
    ChangeFormText = (event) => {
        this.setState({formText: event.target.value});
    }
    FormButtonSubmit = () => {
        this.setState({buttonLoading: true,formSubmitBtnDisabled: true});
        const apiUrl = "https://api-fore-homework-13.herokuapp.com";
        const data = {
            name: this.state.formName,
            mail: this.state.formMail,
            text: this.state.formText
        }
        fetch(apiUrl+'/api/users/message', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    this.setState({responseForm: response.message});
                    this.setState({buttonLoading: false});
                    this.setState({formName: '',formMail: '', formText: '', formSubmitBtnDisabled: true});
                },1500);
            })
    }
    render() {
        return (
            <div className="MainPage">
                <section id="section-0">
                    <h2>Мы покупаем Кеги</h2>
                    <div className="items">
                            <div className="item">Кеги 50 л</div>
                            <div className="item">Кеги 30 л</div>
                            <div className="item">Кеги 20 л</div>
                    </div>
                    <div className="block-ul">
                        <ul>
                            <li>
                                <Question size={50}/>
                                <Link activeClass="active" className="" to="section1" spy={true} smooth={true} duration={500} >Почему мы ?</Link>
                            </li>
                            <li>
                                <Work size={50}/>
                                <Link activeClass="active" className="" to="section2" spy={true} smooth={true} duration={500} >Как мы работаем ?</Link>
                            </li>
                            <li>
                                <Phone size={50}/>
                                <Link activeClass="active" className="" to="section3" spy={true} smooth={true} duration={500} >Как с нами связаться ?</Link>
                            </li>
                            <li>
                                <Message size={50}/>
                                <Link activeClass="active" className="" to="section4" spy={true} smooth={true} duration={500} >Обратная связь</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="section-1" name="section1">
                    <Question size={50}/>
                    <h2>Почему мы ?</h2>
                    <Container>
                        <ul>
                            <li><Star size={20}/>Мы 5 лет на рынке и рады сотрудничать!</li>
                            <li><LineChart size={20}/>Объем закупок от 1 до 1000 штук.</li>
                            <li><Map size={20}/>Работаем по всей Украине</li>
                            <li><MasterCard size={20}/>Наличный и безналичный расчет</li>
                            <li><Like size={20}/>Покупаем по вашей цене</li>
                        </ul>
                    </Container>
                </section>
                <section id="section-2" name="section2">
                    <Work size={50}/>
                    <h2>Как мы работаем ?</h2>
                    <Container >
                        <div className="items">
                            <div className="item">
                                <Phone2 size={50}/>
                                <p>
                                    <span><strong>+38 (067)-931-17-45</strong></span>
                                    <br/>
                                    <br/>
                                    Если Вы решили продать ПИВНЫЕ КЕГИ - звоните <br/> мне и я куплю у Вас любое количество (от одной штуки) по высокой цене!
                                </p>
                            </div>
                            <div className="item">
                                <Money size={50}/>
                                <p>
                                    <span><strong>Выгодная цена</strong></span>
                                    <br/>
                                    <br/>
                                    Оплату производим наличными по факту приема кег или безналичным расчетом в зависимости от желания продавца.
                                </p>
                            </div>
                            <div className="item">
                                <Buss size={50}/>
                                <p>
                                    <span><strong>Самовывоз</strong></span>
                                    <br/>
                                    <br/>
                                    Покупаю по всей территории Украины, удобной для Вас службой доставки, так же возможен самовывоз.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section id="section-3" name="section3">
                    <Phone size={50}/>
                    <h2>Как с нами связаться ?</h2>
                    <div className="formInfo">
                        <div><Phone2 size={20}/>+38 (067)-931-17-45</div>
                        <div><Message size={20}/>elefantenko@gmail.com</div>
                        <div className="socialBlock">
                            <Facebook size={50}/>
                        </div>
                    </div>
                </section>
                <section id="section-4" name="section4">
                    <Message size={50}/>
                    {
                        this.state.responseForm > '' &&
                        <div className="responseForm">
                            {
                                this.state.responseForm
                            }
                        </div>
                    }
                    <div className="formBlock">
                        <Form.Group>
                            <label>Name</label>
                            <Form.Field control={Input} placeholder='Name' value={this.state.formName} onChange={this.ChangeFormName}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Mail</label>
                            <Form.Field control={Input} placeholder='Mail' value={this.state.formMail} onChange={this.ChangeFormMail}/>
                        </Form.Group>
                        <Form.Group>
                            <label>Price</label>
                            <Form.Field control={Input} placeholder='Price' value={this.state.formPrice} onChange={this.ChangeFormPrice}/>
                        </Form.Group>
                        <Form.Group>
                            <label>TextArea</label>
                            <Form.Field control={TextArea} placeholder='Tell us more about you...' value={this.state.formText} onChange={this.ChangeFormText}/>
                        </Form.Group>
                        <div className="subBlock">
                            <Button loading={this.state.buttonLoading} disabled={this.state.formSubmitBtnDisabled} type='submit' onClick={this.FormButtonSubmit}>Отправить</Button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainPage;
