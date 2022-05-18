import React from "react";
//import {addPost} from '../../data/newRender';
import {addingPostActionCreator,hundleNewPostActionCreator} from '../../data/actionCreators';


const Messages = ({data, dispatch, newPost}) => {
    const theRef = React.createRef()
    const addingPost = () => {
        //  let target = theRef.current.value
        console.log(theRef.current.value);
        dispatch(addingPostActionCreator())
        theRef.current.value = ''
        
    }
    const hundleNewPost = () => {
        let target = theRef.current.value
        newPost = target
        dispatch(hundleNewPostActionCreator(newPost));
    }
    return (
        <div className='content'>
            <div className = 'titles'>my posts:</div>
            <div>add new post:</div>
           <input type = 'text' ref = {theRef}  onChange = {hundleNewPost} />
           <button onClick = {addingPost}>Add new post</button>
            {
                data.map((item,index)=><div className='posts' key={index}>{item}</div>)
            }
        </div>
    )
}
export default Messages;
