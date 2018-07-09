import React, { Component } from 'react';
import './Page50.css';
import { Table } from 'reactstrap';
import { Container } from 'semantic-ui-react';

class Page50 extends Component {
    render() {
        return (
            <div className="Page50">
                <section id="section-0">
                    <h2>Покупаем кеги 50 литров</h2>
                </section>
                <section id="section-1">
                    <Container>
                        <p> КЕГом называется специальная емкость, служащая для транспортировки и продажи пива в розлив (также употребляется для розлива вина, кваса и прочих алкогольных и безалкогольных напитков).</p>
                        <h3>Технические характеристики КЕГ 50 литров стандарта&nbsp;<span>DIN</span></h3>
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
                    <h3>Технические характеристики КЕГ 50 литров стандарта&nbsp;<span>EURO</span></h3>
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

export default Page50;
