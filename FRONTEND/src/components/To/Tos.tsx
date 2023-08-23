import * as React from "react";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Tos(props) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const {id} = useParams();

    return (
        (props.allCar ?
                <section className={'myDetailCar'}>
                    <div className={'carNonFiltered'}>
                        <table className={'myTable'}>
                            <thead>
                            <tr>
                                <td>Зав. № машины</td>
                                <td>Модель техники</td>
                                <td>Модель двигателя</td>
                                <td>Зав. № двигателя</td>
                                <td>Модель трансмиссии</td>
                                <td>Зав. № трансмиссии</td>
                                <td>Модель ведущего моста</td>
                                <td>Зав. № ведущего моста</td>
                                <td>Модель управляемого моста</td>
                                <td>Зав. № управляемого моста</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><Link to={`/car/${props.allCar['id']}`}>{props.allCar['vin']}</Link></td>
                                <td><Link
                                    to={`/car/technic/${props.allCar['technic']}`}>{props.technic.length >= 1 ? props.technic.find(
                                    technic => technic.id === props.allCar['technic']
                                ).name : props.allCar['technic']}</Link></td>
                                <td><Link
                                    to={`/car/engine/${props.allCar['engine']}`}>{props.engine.length >= 1 ? props.engine.find(
                                    engine => engine.id === props.allCar['engine']
                                ).name : props.allCar['engine']}</Link></td>
                                <td>{props.allCar['engineNo']}</td>
                                <td><Link
                                    to={`/car/transmission/${props.allCar['transmission']}`}>{props.transmission.length >= 1 ? props.transmission.find(
                                    transmission => transmission.id === props.allCar['transmission']
                                ).name : props.allCar['transmission']}</Link></td>
                                <td>{props.allCar['transmissionNo']}</td>
                                <td><Link
                                    to={`/car/drivingbridge/${props.allCar['drivingBridge']}`}>{props.drivingbridge.length >= 1 ? props.drivingbridge.find(
                                    drivingbridge => drivingbridge.id === props.allCar['drivingBridge']
                                ).name : props.allCar['drivingBridge']}</Link></td>
                                <td>{props.allCar['drivingBridgeNo']}</td>
                                <td><Link
                                    to={`/car/controlledbridge/${props.allCar['controlledBridge']}`}>{props.controlledbridge.length >= 1 ? props.controlledbridge.find(
                                    controlledbridge => controlledbridge.id === props.allCar['controlledBridge']
                                ).name : props.allCar['controlledBridge']}</Link></td>
                                <td>{props.allCar['controlledBridgeNo']}</td>
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
