import React from 'react'
import Titles from '../Titles'
import Messages from '../Messages'

const TheWall = ({data}) => {
    return (
        <>
           <Titles mess ='This is my Wall' />
           <Messages data = {data} />
        </>
    )
}
export default TheWall;