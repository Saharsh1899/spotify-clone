export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null, // song listening to
    token: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    search: ''
};

export const ACTION ={
    SET_USER: "set-user",
    SET_TOKEN: "set-token",
    SET_PLAYLIST: "set-playlist",
    SET_PLAYING: "set-playing",
    SET_ITEM: "set-item",
    SET_DISCOVER_WEEKLY: "set-discover-weekly",
    SET_TOP_ARTIST: "set-top-artist",
    SET_SPOTIFY: "set-spotify",
    SEARCH: "search"
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case ACTION.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case ACTION.SET_TOKEN:
            return{
                ...state,
                token: action.token
            };
        case ACTION.SET_PLAYLIST:
            return{
                ...state,
                playlists: action.playlists
            };
        case ACTION.SET_DISCOVER_WEEKLY:
            return{
                ...state,
                discover_weekly: action.discover_weekly
            };
        case ACTION.SET_ITEM:
            return{
                ...state,
                item: action.item
            };
        case ACTION.SET_SPOTIFY:
            return{
                ...state,
                spotify: action.spotify
            };
        case ACTION.SET_PLAYING:
            return{
                ...state,
                playing: action.playing
            };
        case ACTION.SET_TOP_ARTIST:
            return{
                ...state,
                top_artists: action.top_artists
            };
        case ACTION.SEARCH:
            return{
                ...state,
                search: action.search
            };
        default:
            return state;
    }
}

export default reducer;