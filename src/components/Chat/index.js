import React from 'react'
import Post from '../Post/index'
import Titles from '../Titles'

const Chat = ({user,userId, dispatch, newPost}) => {
    const idUser = parseInt(userId.userId)
    const setUser = user.find(item=>item.id===idUser)
    console.log(setUser);

    const theRef = React.createRef()
    const addingPost = () => {
        let target = theRef.current.value
        newPost = target
        dispatch({type: 'ADD-ANSWER'},idUser);

    }
    const hundleNewPost = () => {
        let target = theRef.current.value
        newPost = target
        dispatch({type:'UPDATE-INPUT', message: newPost});
    }

    const renderUser = data => {
        return (<>
                    <img  alt = 'ava' src = {`/images/minion${data.id}.jpg`} width = '100' height = '100'></img>
                    <Post message = {data.message} />
                    <input type = 'text' ref = {theRef} value = {newPost} onChange = {hundleNewPost} />
                    <button onClick = {addingPost}>Add new post</button>
                    <div>{data.answer.map((item,index)=><div className='posts' key={index}>{item}</div>)}</div>
                </>)
    }
    return (
        <>
        <Titles mess ='Personal Chat' />
        <div id='chat'>
            {renderUser(setUser)}
        </div>
        </>
    )
}
export default Chat;