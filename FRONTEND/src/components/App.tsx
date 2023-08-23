import * as React from 'react';
import '../styles/App.scss';
import Header from './Header/Header';
import CarMain from './Car/CarMain';
import {
    Route, Routes
} from 'react-router-dom';
import Api from './Api/Api';
import DetailCar from './Car/DetailCar';
import ShowTechnic from './Car/Services/ShowTechnic';
import ShowEngine from './Car/Services/ShowEngine';
import ShowTransmission from './Car/Services/ShowTransmission';
import ShowDrivingbridge from './Car/Services/ShowDrivingbridge';
import ShowControlledbridge from './Car/Services/ShowControlledbridge';
import AuthPage from './Auth/AuthPage';
import {useEffect, useState} from 'react';
import ManagerMain from './ForManager/ManagerMain';
import ShowClient from "./Car/Services/ShowClient";
import ShowCompany from "./Car/Services/ShowCompany";
import CarEdit from './ForManager/CarEdit';
import ToMain from "./To/ToMain";

export default function App(props) {

    const defaultURL = 'http://127.0.0.1:8000/api/v1/'

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token.access) {
            console.log(token)
            console.log(token.access)
            setIsAuthenticated(true)
        } else {
            const interval = setInterval(() => {
                const token = JSON.parse(localStorage.getItem('token'));
                if (token.access) {
                    setIsAuthenticated(true)
                    clearInterval(interval)
                }
            }, 1500)
        }
    }, []);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header isAuthenticated={isAuthenticated}/>}>
                    <Route index element={<CarMain defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'car/:id'}
                           element={<DetailCar defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'car/technic/:id'}
                           element={<ShowTechnic defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'car/engine/:id'}
                           element={<ShowEngine defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'car/transmission/:id'}
                           element={<ShowTransmission defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'car/drivingbridge/:id'}
                           element={<ShowDrivingbridge defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'car/controlledbridge/:id'}
                           element={<ShowControlledbridge defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                    <Route path={'auth'} element={<AuthPage defaultURL={defaultURL}/>}/>
                    {isAuthenticated && (
                        <>
                            <Route path={'car/client/:id'}
                                   element={<ShowClient defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                            <Route path={'car/company/:id'}
                                   element={<ShowCompany defaultURL={defaultURL} isAuthenticated={isAuthenticated}/>}/>
                            <Route path={'manager'} element={<ManagerMain defaultURL={defaultURL}/>}/>
                            <Route path={'manager/car/:id'} element={<CarEdit defaultURL={defaultURL}/>}/>
                            <Route path={'to'} element={<ToMain defaultURL={defaultURL}/>}/>
                        </>
                    )}
                </Route>
                <Route path={'/api'} element={<Api/>}/>
            </Routes>

        </>


    )
};