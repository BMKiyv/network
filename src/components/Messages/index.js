import React from "react";

const Messages = () => {
    const obj = [
       'hello world',
        'this is new post',
        'this is one more post',
        'also one post',
       'finally, the last post'
    ]
    return (
        <div className='content'>
            <div className = 'titles'>my posts:</div>
            <div className = 'titles'>new post</div>
            {
                obj.map((item,index)=><div className='posts' key={index}>{item}</div>)
            }
        </div>
    )
}
export default Messages;
