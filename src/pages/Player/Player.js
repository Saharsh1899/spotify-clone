import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Footer from '../../component/Footer/Footer';
import Body from '../../component/Body/Body';
import './Player.css';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default Player
