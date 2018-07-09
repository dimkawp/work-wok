import React, { Component } from 'react';
import './Page30.css';
import { Table } from 'reactstrap';
import { Container } from 'semantic-ui-react';

class Page30 extends Component {
    render() {
        return (
            <div className="Page30">
                <section id="section-0">
                    <h2>Покупаем кеги 30</h2>
                </section>
                <section id="section-1">
                    <Container>
                        <p>Пивные кеги – оптимальный способ транспортировки и хранения «живого пива». Кег 30 литров
                            становится популярным и востребованным. Благодаря меньшему размеру и весу требует меньших
                            усилий при погрузке, транспортировке и установке. Мы покупаем 30 литровые пивные кеги в
                            любом количестве на выгодных для Вас условиях.</p>
                        <Table striped hover className="table">
                            <tbody>
                            <tr>
                                <td>Объём, в литрах</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Внешний диаметр, мм</td>
                                <td>381</td>
                            </tr>
                            <tr>
                                <td>Общая высота, мм</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td>Толщина боковых стенок, мм</td>
                                <td>1,5</td>
                            </tr>
                            <tr>
                                <td>Толщина днищ, мм</td>
                                <td>1,7</td>
                            </tr>
                            <tr>
                                <td>Вес КЕГа, кг +/- 5%</td>
                                <td>9,2</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                    <h3>Технические характеристики КЕГ 30 литров стандарта <span>Euro</span></h3>
                    <Container>
                        <Table striped hover className="table">
                            <tbody>
                            <tr>
                                <td>Объём, в литрах</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Внешний диаметр, мм</td>
                                <td>408</td>
                            </tr>
                            <tr>
                                <td>Общая высота, мм</td>
                                <td>365</td>
                            </tr>
                            <tr>
                                <td>Толщина боковых стенок, мм</td>
                                <td>1,5</td>
                            </tr>
                            <tr>
                                <td>Толщина днищ, мм</td>
                                <td>1,7</td>
                            </tr>
                            <tr>
                                <td>Вес КЕГа, кг +/- 5%</td>
                                <td>9,2</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Page30;
