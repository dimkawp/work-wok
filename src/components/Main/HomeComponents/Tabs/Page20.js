import React, { Component } from 'react';
import './Page20.css';
import { Table } from 'reactstrap';
import { Container } from 'semantic-ui-react';

class Page20 extends Component {
    render() {
        return (
            <div className="Page20">
                <section id="section-0"><h2>Покупаем кеги 20 литров</h2></section>
                <section id="section-1">
                    <p><strong>Кеги</strong> — металлическая емкость (нержавеющая сталь), которая
                        предназначена для транспортировки и хранения пива и других алкогольных и безалкогольных напитков.</p>
                    <h3>Технические характеристики КЕГ 20 литров стандарта&nbsp;<span>DIN</span></h3>
                    <Container>
                        <Table striped center hover className="table">
                            <tbody>
                            <tr>
                                <td>Объём, в литрах</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Внешний диаметр, мм</td>
                                <td>363</td>
                            </tr>
                            <tr>
                                <td>Общая высота, мм</td>
                                <td>310</td>
                            </tr>
                            <tr>
                                <td>Вес КЕГа, кг +/- 3%</td>
                                <td>8,2&nbsp;</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                    <h3>Технические характеристики КЕГ 20 литров стандарта EURO</h3>
                    <Container>
                        <Table striped center hover className="table">
                            <tbody>
                            <tr>
                                <td>Объём, в литрах</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Внешний диаметр, мм</td>
                                <td>395</td>
                            </tr>
                            <tr>
                                <td>Общая высота, мм</td>
                                <td>216</td>
                            </tr>
                            <tr>
                                <td>Вес КЕГа, кг +/- 3%</td>
                                <td>8,2</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                </section>


            </div>
        );
    }
}

export default Page20;
