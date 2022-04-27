import React from 'react';
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

    const handleEmojiClick = () => {
        
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

            <div className="chatWindow--emojiarea">
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">

                <       div className="chatWindow--btn">
                            <CloseIcon style={{color: '#6272a4'}} />
                        </div>

                       <div className="chatWindow--btn">
                            <EmojiEmotionsIcon style={{color: '#6272a4'}} />
                        </div>


                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        type="text"
                        placeholder="Digite sua mensagem"                        
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