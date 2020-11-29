import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './pages/Player/Player';
import { useStateValue } from './Hooks/StateProvider';
import { ACTION } from './Hooks/reducer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token){
      spotify.setAccessToken(_token);

      dispatch({
        type: ACTION.SET_TOKEN,
        token: _token
      })

      spotify.getMe().then(user => {
        dispatch({
          type: ACTION.SET_USER, 
          user: user // user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: ACTION.SET_PLAYLIST, 
          playlists:playlists
        })
      });

      spotify.getPlaylist("2kV2g7uCTlYvASTkQGHx1l").then((response) =>
        dispatch({
          type: ACTION.SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: ACTION.SET_TOP_ARTIST,
          top_artists: response,
        })
      );

      dispatch({
        type: ACTION.SET_SPOTIFY,
        spotify:spotify
      })

    }
  }, [token, dispatch]);

  // console.log("PERSON >> ", user);
  // console.log("TOKEN >> ", token);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
