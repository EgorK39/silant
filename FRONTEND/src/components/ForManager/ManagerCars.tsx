import * as React from 'react';
import '../../styles/ManagerCars.scss';
import {Link, useParams} from 'react-router-dom';
import {useEffect} from "react";


export default function ManagerCars(props) {
    const {id} = useParams();

    useEffect(() => {
        console.log(props.technic)
        console.log(props.engine)
        console.log(props.engine.engine)


    }, [])
    return (
        ((props.allCars && (props.client.length > 1) &&
                (props.client.length > 1) && (props.technic.length > 1) && (props.engine.length > 1) &&
                (props.transmission.length > 1) && (props.controlledbridge.length > 1) &&
                (props.drivingbridge.length > 1)) ?
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

                            <td>Договор поставки</td>
                            <td>Дата отгрузки с завода</td>
                            <td>Грузополучатель</td>
                            <td>Адрес поставки</td>
                            <td>Комплектация</td>
                            <td>Клиент</td>
                            <td>Сервисная компания</td>
                        </tr>
                        </thead>
                        <tbody>
                        {props.allCars.map((el, i) =>
                            <tr key={el.id}>
                                <td><Link to={`/manager/car/${el.id}`}>{el.vin}</Link></td>
                                <td><Link to={`/car/technic/${el['technic']}`}>{props.technic ? props.technic.find(
                                    technic => technic.id === el['technic']
                                ).name : el['technic']}</Link></td>
                                <td><Link to={`/car/engine/${el['engine']}`}>{props.engine ? props.engine.find(
                                    engine => engine.id === el['engine']
                                ).name : el['engine']}</Link></td>
                                <td>{el.engineNo}</td>
                                <td><Link
                                    to={`/car/transmission/${el.transmission}`}>{props.transmission ? props.transmission.find(
                                    transmission => transmission.id === el['transmission']
                                ).name : el.transmission}</Link></td>
                                <td>{el.transmissionNo}</td>
                                <td><Link
                                    to={`/car/drivingbridge/${el.drivingBridge}`}>{props.drivingbridge ? props.drivingbridge.find(
                                    drivingbridge => drivingbridge.id === el['drivingBridge']
                                ).name : el.drivingBridge}</Link></td>
                                <td>{el.drivingBridgeNo}</td>
                                <td><Link
                                    to={`/car/controlledbridge/${el.controlledBridge}`}>{props.controlledbridge ? props.controlledbridge.find(
                                    controlledbridge => controlledbridge.id === el['controlledBridge']
                                ).name : el.controlledBridge}</Link></td>
                                <td>{el.controlledBridgeNo}</td>

                                <td>{el.contract}</td>
                                <td>{el.dateOfShipment}</td>
                                <td>{el.consignee}</td>
                                <td>{el.deliveryAddress}</td>
                                <td>{el.equipment}</td>
                                <td><Link
                                    to={`/car/client/${el.client}`}>{props.client ? props.client.find(
                                    client => client.id === el['client']
                                ).name : el.client}</Link></td>
                                <td><Link
                                    to={`/car/company/${el.serviceCompany}`}>{props.company ? props.company.find(
                                    company => company.id === el['serviceCompany']
                                ).name : el.serviceCompany}</Link></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div> :
                ''
        )

    )
}