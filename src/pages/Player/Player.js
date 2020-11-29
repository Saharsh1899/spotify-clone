import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Footer from '../../component/Footer/Footer';
import Body from '../../component/Body/Body';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Player.css';
import SearchPage from '../SearchPage/SearchPage';

function Player({ spotify }) {
    return (
        <Router>
            <div className="player">
                <Switch>
                    <Route path="/search/:searchTerm">
                        <div className="player__body">
                            <Sidebar />
                            <SearchPage />
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="player__body">
                            <Sidebar />
                            <Body spotify={spotify} />
                        </div>
                    </Route>
                </Switch>
                <Footer spotify={spotify} />
            </div>
        </Router>
    )
}

export default Player
