import React, { useState, useEffect } from "react";
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import CommentIcon from '@material-ui/icons/Comment';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';


const App = () => {
  const [chatlist, setChatList] = useState([
    { chatId: 1, title: 'persona1', image: 'https://image.pngaaa.com/845/4786845-middle.png' },
    { chatId: 2, title: 'persona2', image: 'https://comic-cons.xyz/wp-content/uploads/Star-Wars-avatars-Movie-Stormtrooper.jpg' },
    { chatId: 3, title: 'persona3', image: 'https://www.pngkey.com/png/full/895-8954338_hurricanes-avatar-star-wars-the-last-jedi-jar.png' },
    { chatId: 4, title: 'persona4', image: 'https://hqrock.files.wordpress.com/2019/08/obi-wan-lightsaber.jpg' },
    { chatId: 5, title: 'persona5', image: 'https://sm.ign.com/t/ign_br/screenshot/default/darth-vader-cat_tmxn.h960.jpg' }

  ])
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };

    setUser(newUser);
  }

  if (!user) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="app-window">
      <div className="sidebar">

        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}

        />

        <header>
          <img className="header--avatar" src={user.avatar} alt="imagem perfil mandaloriano" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#6272a4' }} />
            </div>
            <div onClick={handleNewChat} className="header--btn">
              <CommentIcon style={{ color: '#6272a4' }} />
            </div>
            <div className="header--btn">
              <ListIcon style={{ color: '#6272a4' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#6272a4' }} />
            <input type="search" placeholder="Procurar ou iniciar um chat"></input>
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;