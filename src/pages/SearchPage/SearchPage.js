import React from 'react'
import Header from '../../component/Header/Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../../component/SongRow/SongRow';
import { useStateValue } from '../../Hooks/StateProvider';
import './SearchPage.css'

function SearchPage() {
    const [{ search }, ] = useStateValue();

    return (
        <div className="searchPage">
            <Header /> 
            <div className="searchPage__infoText">
                <strong>PLAYLIST</strong>
                <h2>Search Results</h2>
                </div>
            <div className="searchPage__songs">
                <div className="searchPage__icons">
                    <PlayCircleFilledIcon
                        className="searchPage__shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {search?.tracks.items.map((item) => (
                    <SongRow track={item} />
                ))}
            </div>         
        </div>
    )
}

export default SearchPage;
