import React from 'react'
import Titles from '../Titles'
//import {me} from '../../data/data'


const Bio = ({data}) => {
    return (
        <>
        <Titles mess ='My BIO:' />
        <div className='content'>
            <img  alt = 'ava' src = {`/images/${data.photo}.jpg`} width = '100'></img>
            <p>name:{data.myName}</p>
        </div>
     </>
    )
}
export default Bio;

//className='content'