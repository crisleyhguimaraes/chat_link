import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';



export default () => {

    const [emojiOpen, setEmojiOpen] = useState (false);
    const [text, setText] = useState ('');

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
        
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://image.pngaaa.com/845/4786845-middle.png" alt="" />
                    <div className="chatWindow--name"> Personagem </div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                            <SearchIcon style={{color: '#6272a4'}} />
                    </div>
                    <div className="chatWindow--btn">
                            <AttachFileIcon style={{color: '#6272a4'}} />
                    </div>
                    <div className="chatWindow--btn">
                            <SettingsIcon style={{color: '#6272a4'}} />
                    </div>

                </div>

            </div>
            <div className="chatWindow--body">
            </div>

            <div className="chatWindow--emojiarea" 
                style={{height: emojiOpen ? '200px' : '0px'}}  >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">

                <   div className="chatWindow--btn"
                    onClick={handleCloseEmoji}
                    style={{width: emojiOpen?40:0}}
                >
                            <CloseIcon style={{color: '#6272a4'}} />
                        </div>

                       <div className="chatWindow--btn"
                            onClick={handleOpenEmoji}
                       >

                            <EmojiEmotionsIcon style={{color: emojiOpen?'#3d3c6149':'#6272a4'}} />
                        </div>


                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text"
                        placeholder="Digite sua mensagem"                        
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>

                <div className="chatWindow--pos">
                        <div className="chatWindow--btn">
                            <SendIcon  style={{color: '#6272a4'}} />
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}