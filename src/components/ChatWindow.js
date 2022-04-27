import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';



export default () => {

    //transcrever audio 
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined){
        recognition = new SpeechRecognition;
    }

    //fim
    const [emojiOpen, setEmojiOpen] = useState (false);
    const [text, setText] = useState ('');
    const [listenig, setListenig] = useState (false);
    const [list, setList] = useState ([{},{},{},{},{},{}])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
        
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if(recognition !== null){
//transcrição do audio
            recognition.onstart = () => {
                setListenig (true);
            }
            recognition.onend = () => {
                setListenig (false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }
//mic ouvir audio- qndo iniciar executa o Listening como true, quando acabar como false
//
            recognition.start ();
                
        }
    }
    const handleSendClick = () => {

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
                {list.map((item, key) =>(
                    <MessageItem
                        key={key}
                        data={item}
                    />
                ))}


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

                            <EmojiEmotionsIcon style={{color: emojiOpen?'#8be9fd':'#6272a4'}} />
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
                    {text === ''&&
                    <div onClick={handleMicClick} className="chatWindow--btn">
                        <SettingsVoiceIcon  style={{color: listenig?'#8be9fd' : '#6272a4'}} />
                    </div>
                    }
                    {text !== '' &&
                    <div onClick={handleSendClick} className="chatWindow--btn">
                        <SendIcon  style={{color: '#6272a4'}} />
                    </div>
                    }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}