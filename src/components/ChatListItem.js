import React from 'react';
import './ChatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div 
        className={`chatListItem ${active? 'active':''}`}
        onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt="avatar Baby Yoda" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">13:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Oxi doido, vai me salvar não?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}