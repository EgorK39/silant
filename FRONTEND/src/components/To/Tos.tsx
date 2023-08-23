import * as React from "react";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Tos(props) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const {id} = useParams();

    return (
        (((props.allTo) && (props.autos.length > 1) && (props.type.length > 1) && (props.company.length > 1)) ?
                <section className={'myDetailCar'}>
                    <div className={'carNonFiltered'}>
                        <table className={'myTable'}>
                            <thead>
                            <tr>
                                <td>Вид ТО</td>
                                <td>Дата проведения ТО</td>
                                <td>Наработка, м/час</td>
                                <td>№ заказ-наряда</td>
                                <td>Дата заказ-наряда</td>
                                <td>Организация, проводившая ТО</td>
                                <td>Машина</td>
                                <td>Сервисная компания</td>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{props.type.length >= 1 ? props.type.find(
                                    type => type.id === props.allTo['to']
                                ).name : props.allTo['to']}</td>
                                <td>{props.allTo['dateOfTo']}</td>
                                <td>{props.allTo['work']}</td>
                                <td>{props.allCar['dateOfOrder']}</td>
                                <td>{props.company.length >= 1 ? props.company.find(
                                    company => company.id === props.allTo['whoMakeTo']
                                ).name : props.allTo['whoMakeTo']}</td>
                                <td>{props.autos.length >= 1 ? props.autos.find(
                                    autos => autos.id === props.allTo['car']
                                ).vin : props.allTo['car']}</td>
                                <td>{props.company.length >= 1 ? props.company.find(
                                    company => company.id === props.allTo['car']
                                ).name : props.allTo['serviceCompany']}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className={'btnOneOfCars'} onClick={e => goBack()}>Назад</button>
                </section> :
                ''
        )
    )
}
