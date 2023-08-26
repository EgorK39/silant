import * as React from 'react';
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function NavBar(props) {
    useEffect(() => {
        console.log(props.userName)
    }, [])
    return (
        <div>
            <p>{props.userName}</p>
            <div>
                <ul>
                    <li><Link to={'/manager'}>
                        <button>Общая информация</button>
                    </Link></li>
                </ul>
                <li>
                    <Link to={'/to'}>
                        <button>TO</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/rec'}>
                        <button>Рекламации</button>
                    </Link>
                </li>

            </div>
        </div>
    )
}