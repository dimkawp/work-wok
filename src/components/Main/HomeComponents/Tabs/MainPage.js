import React, { Component } from 'react';
import './MainPage.css';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <section id="section-0">
                    <h2>Мы покупаем Кеги 1</h2>
                    <div className="img1">Какая то картинка</div>
                    <a href="">линка на фитинги или модел окно</a>
                    <div className="img2">Какая то картинка</div>
                </section>
                <section id="section-1">
                    <h2>Почему мы ?</h2>
                    <span>Тут 5 причин + картинка или список</span>
                    <div className="items">
                        <div className="item">1</div>
                        <div className="item">2</div>
                        <div className="item">3</div>
                        <div className="item">4</div>
                        <div className="item">5</div>
                    </div>
                </section>
                <section id="section-2">
                    <h2>Как мы работаем ?</h2>
                    <span>тут или гифками или картинками цепочка</span>
                    <div className="items">
                        <div className="item">1</div>
                        <div className="item">2</div>
                        <div className="item">3</div>
                    </div>
                </section>
                <section id="section-3">
                    <h2>Как с нами связаться ?</h2>
                    <div className="formInfo">картинка + инфа</div>
                </section>
                <section id="section-4">
                    <div className="formBlock">
                        <span>Форма !</span>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainPage;
