import * as React from "react";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Tos(props) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const {id} = useParams();
    useEffect(() => {
        console.log(props.allTo)
        console.log(props.type)
        console.log(props.company)
        console.log(props.autos)

    }, [])
    return (
        ((props.allTo == null && !props.type.length && !props.company.length && !props.autos.length) ?
                '' :
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
                            {props.allTo.map((el, i) =>
                                <tr key={el.id}>
                                    <td><Link to={`/to/show/type/${el['to']}`}>{props.type ? props.type.find(
                                        type => type.id === el['to']
                                    ).name : el['to']}</Link></td>
                                    <td>{el['dateOfTo']}</td>
                                    <td>{el['work']}</td>
                                    <td>{el['order']}</td>
                                    <td>{el['dateOfOrder']}</td>
                                    <td><Link
                                        to={`/car/company/${el['serviceCompany']}`}>{props.company ? props.company.find(
                                        company => company.id === el['whoMakeTo']).name : el['whoMakeTo']}</Link></td>
                                    <td><Link to={`/car/${el['car']}`}>{props.autos ? props.autos.find(
                                        autos => autos.id === el['car']
                                    ).vin : el['car']}</Link></td>
                                    <td><Link
                                        to={`/car/company/${el['serviceCompany']}`}>{props.company ? props.company.find(
                                        company => company.id === el['serviceCompany']
                                    ).name : el['serviceCompany']}</Link></td>
                                </tr>
                            )}

                            </tbody>
                        </table>
                    </div>
                    <button className={'btnOneOfCars'} onClick={e => goBack()}>Назад</button>
                </section>

        )
    )
}
