import React from "react";
//import {addPost} from '../../data/newRender';

const Messages = ({data,addPost,newPost,updateInput}) => {
    const theRef = React.createRef()
    const addingPost = () => {
        let target = theRef.current.value
        newPost = target
        addPost(newPost);

    }
    const hundleNewPost = () => {
        let target = theRef.current.value
        newPost = target
        updateInput(target);
    }
    return (
        <div className='content'>
            <div className = 'titles'>my posts:</div>
            <div>add new post:</div>
           <input type = 'text' ref = {theRef} value = {newPost} onChange = {hundleNewPost} />
           <button onClick = {addingPost}>Add new post</button>
            {
                data.map((item,index)=><div className='posts' key={index}>{item}</div>)
            }
        </div>
    )
}
export default Messages;
