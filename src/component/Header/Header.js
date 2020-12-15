import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../Hooks/StateProvider';
import './Header.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from 'react-router-dom';
import { ACTION } from '../../Hooks/reducer';

function Header({ history }) {
    const [{ user, spotify }, dispatch] = useStateValue();
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        spotify.searchTracks(inputSearch).then(search => {
            dispatch({
                type: ACTION.SEARCH, 
                search: search 
            })
        });
    }, [inputSearch])
     
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon onClick={() => history.push(`/search/${inputSearch}`)} />
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    className="header__searchInput"
                    placeholder="Search for Songs"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default withRouter(Header);
