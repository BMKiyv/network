import React from "react";

const Messages = ({data}) => {
    return (
        <div className='content'>
            <div className = 'titles'>my posts:</div>
            {/* <div className = 'titles'>new post</div> */}
            {
                data.map((item,index)=><div className='posts' key={index}>{item}</div>)
            }
        </div>
    )
}
export default Messages;
