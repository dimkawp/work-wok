import React, { Component } from 'react';
import './PagePrice.css';
import { Container, Input, TextArea, Button, Form } from 'semantic-ui-react';

class PagePrice extends Component {
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
            <div className="PagePrice">
                <section id="section-0">
                    <h2>На цену каждой пивной кеги влияет ряд факторов:</h2>
                </section>
                <section id="section-1">
                    <Container>
                        <div className="ulBlock">
                            <ul>
                                <li>вид фитинга;</li>
                                <li>количество реализуемой тары;</li>
                                <li>тип кеги (DIN или EURO);</li>
                                <li>литраж кеги;</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                Учитывая эти факторы, купим у вас все и предложим вам лучшую стоимость с с
                                амовывозом или отправкой наложенным платежом.
                                Мы покупаем кеги объемом 20,30,50 литров по всей Украине от 1 шт
                                Гарантируем полную конфиденциальность сделки. Оплачиваем наличными или через безналичный расчет.
                            </p>
                        </div>
                    </Container>
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

export default PagePrice;
