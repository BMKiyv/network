import React from "react";
import { NavLink } from "react-router-dom";
import Titles from "../Titles";
//import {myUsers} from '../../data/data'
import './style.scss'

const Dialogs = ({myUsers}) => {
    const renderUsers = data => {
        return (<>
                    <img  alt = 'ava' src = {`/images/minion${data.id}.jpg`} width = '100' height = '100'></img>
                    <NavLink to={`/dialogs/${data.id}`} className = 'dialogs-link' >{data.user}</NavLink>
                    <span>{data.message}</span>
                </>)
    }

    return (
        <>
        <Titles mess ='DIALOGS:' />
        <div className = 'content dialogs'>
        <div className = 'dialogs-item'>
           { myUsers.map((item,ind)=><div key={ind}>{renderUsers(item)}</div>)}
        </div>
        </div>

        </>
    )
}

export default Dialogs;