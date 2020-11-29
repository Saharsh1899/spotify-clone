import React from 'react';
import { useStateValue } from '../../Hooks/StateProvider';
import Header from '../Header/Header';
import './Body.css';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../SongRow/SongRow';
import { ACTION } from '../../Hooks/reducer';

function Body( {spotify} ) {
    const [{ discover_weekly }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:${id}`,
            })
            .then((response) => {
                spotify.getMyCurrentPlaybackState().then((res) => {

                    dispatch({
                        type: ACTION.SET_PLAYING,
                        playing: true,
                    });

                    dispatch({
                        type: ACTION.SET_ITEM,
                        item: res.item,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((response) => {
                spotify.getMyCurrentPlaybackState().then((res) => {

                    dispatch({
                        type: ACTION.SET_PLAYING,
                        playing: true,
                    });

                    dispatch({
                        type: ACTION.SET_ITEM,
                        item: res.item,
                    });
                });
            });
  };

    return (
        <div className="body">
            <Header />
            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={() => playPlaylist(discover_weekly.id)}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow playSong={playSong} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
