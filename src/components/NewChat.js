import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default () => {

    const [list, setList] = useState([
        {id: 123, avatar: 'https://comic-cons.xyz/wp-content/uploads/Star-Wars-avatars-Movie-Stormtrooper.jpg', name: 'Stormtrooper'},
        {id: 123, avatar: 'https://w7.pngwing.com/pngs/322/664/png-transparent-yoda-telegram-sticker-kik-messenger-advertising-others-miscellaneous-superhero-fictional-character-thumbnail.png', name: 'Master Yoda'},
        {id: 123, avatar: 'https://br.web.img3.acsta.net/pictures/21/12/30/20/46/4230767.jpg', name: 'Boba Fett'},
        {id: 123, avatar: 'https://hqrock.files.wordpress.com/2019/08/obi-wan-lightsaber.jpg', name: 'Obi-Wan'}
    ]);


    return (
        <div className="newChat" >
            <div className="newChat--head">
                <div className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#bd93f9'}} />
                </div>
                <div className="newChat--headtitle">Novo chat</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src="" alt="" />
                        <div className="newChat--itemname">

                        

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}