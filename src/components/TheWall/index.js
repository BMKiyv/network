import React from 'react'
import Titles from '../Titles'
import Messages from '../Messages'

const TheWall = ({data,addPost,newPost,updateInput}) => {

    return (
        <>
           <Titles mess ='This is my Wall' />
           <Messages data = {data} addPost = {addPost} newPost = {newPost} updateInput = {updateInput} />
        </>
    )
}
export default TheWall;