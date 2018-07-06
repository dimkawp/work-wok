import React, { Component } from 'react';
import './PagePrice.css';
import { Container } from 'semantic-ui-react';

class PagePrice extends Component {
    render() {
        return (
            <div className="PagePrice">
                <section id="section-0">
                    <h2>На цену каждой пивной кеги влияет ряд факторов:</h2>
                </section>
                <section id="section-1">
                    <Container>
                        <ul>
                            <li>вид фитинга;</li>
                            <li>количество реализуемой тары;</li>
                            <li>тип кеги (DIN или EURO);</li>
                            <li>литраж кеги;</li>
                        </ul>
                        <div>
                            Учитывая эти факторы, купим у вас все и предложим вам лучшую стоимость с с
                            амовывозом или отправкой наложенным платежом.
                            Мы покупаем кеги объемом 20,30,50 литров по всей Украине от 1 шт
                            Гарантируем полную конфиденциальность сделки. Оплачиваем наличными или через безналичный расчет.
                        </div>
                        <div className="formBlock">
                            FORM
                        </div>
                    </Container>
                </section>
            </div>
        );
    }
}

export default PagePrice;
