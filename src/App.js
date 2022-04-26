import React from "react";
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import CommentIcon from '@material-ui/icons/Comment';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
          <header> 
            <img className="header--avatar" src="./img/mandalorian.png" alt="imagem perfil mandaloriano" />
            <div className="header--buttons">
              <div className="header--btn">
                <DonutLargeIcon style={{color: '#6272a4'}} />
              </div>
              <div className="header--btn">
                <CommentIcon style={{color: '#6272a4'}} />
              </div>
              <div className="header--btn">
                <ListIcon style={{color: '#6272a4'}} />
              </div>
            </div>
          </header>

          <div className="search">
            <div className="search--input">
              <SearchIcon fontSize="small" style={{color: '#6272a4'}} />
              <input type="search" placeholder="Procurar ou iniciar um chat"></input>
              </div>
          </div>

          <div className="chatlist">
            ---
          </div>


      </div>
      <div className="contentarea">
        .............
      </div>   
    </div>
  );
}