import * as React from "react";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Tos(props) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const {id} = useParams();
    useEffect(() => {
        console.log(props.allRec)
        console.log(props.rejection)
        console.log(props.company)
        console.log(props.autos)
        console.log(props.recovery)

    }, [])
    return (
        ((props.allRec == null && !props.recovery.length && !props.company.length && !props.autos.length && !props.rejection.length) ?
                '' :
                <section className={'myDetailCar'}>
                    <div className={'carNonFiltered'}>
                        <table className={'myTable'}>
                            <thead>
                            <tr>
                                <td>Дата отказаО</td>
                                <td>Наработка, м/час</td>
                                <td>Узел отказа</td>
                                <td>Описание отказа</td>
                                <td>Способ восстановления</td>
                                <td>Используемые запасные части</td>
                                <td>Дата восстановления</td>
                                <td>Время простоя техники</td>
                                <td>Mашина</td>
                                <td>Сервисная компания</td>
                            </tr>
                            </thead>
                            <tbody>
                            {props.allRec.map((el, i) =>
                                <tr key={el.id}>
                                    <td>{el['dateOfRejection']}</td>
                                    <td>{el['work']}</td>
                                    <td>{props.rejection ? el['nodeOfRejection'].map((e, i) =>
                                            <span key={i}>
                                                <Link to={`/rec/show/rejection/${e}`}>
                                        {props.rejection.find(rejection => rejection.id === e).name}
                                                    </Link>
                                    </span>
                                    ) : el['nodeOfRejection'][0]}</td>
                                    <td>{el['description']}</td>
                                    <td>{props.recovery ? el['recovery'].map((e, i) =>
                                            <span key={i}><Link to={`/rec/show/recovery/${e}`}>
                                        {props.recovery.find(recovery => recovery.id === e).name}
                                                </Link>
                                    </span>
                                    ) : el['recovery'][0]}</td>
                                    <td>{el['spareParts']}</td>
                                    <td>{el['DateOfRestoration']}</td>
                                    <td>{el['downtime']}</td>
                                    <td><Link to={`/car/${el['car']}`}>{props.autos ? props.autos.find(
                                        autos => autos.id === el['car']).vin : el['car']}</Link></td>
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
