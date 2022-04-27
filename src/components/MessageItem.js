import React from 'react';
import './MessageItem.css';

export default ({data, user}) => {
    return ( 
    <div className="messageLine"
        style={{
            justifyContent: user.id === data.author? 'flex-end' : 'flex-start'
        }}
    >
        <div className="messageItem"
            style={{
    backgroundColor: user.id === data.author? '#44475a': '#8be9fd'
                }}
        >
            <div className="messageText">{data.body}</div>
            <div className="messageDate">22h</div>
        </div>
    </div>
    );
}