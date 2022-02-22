import React from 'react'
import Titles from '../Titles'
import Messages from '../Messages'

const TheWall = ({data, dispatch, newPost}) => {

    return (
        <>
           <Titles mess ='This is my Wall' />
           <Messages data = {data} dispatch = { dispatch } newPost = {newPost}  />
        </>
    )
}
export default TheWall;