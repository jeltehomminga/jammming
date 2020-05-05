const CLIENT_ID = 'fc2449106d7a4ec3a50a812ab699cf89';
const REDIRECT_URI = 'https://condescending-feynman-70355a.netlify.app/';

let accessToken;
let expires;

const Spotify = {
  getAccesToken: () => {
    if (accessToken) return accessToken;
    {
      const queryString = window.location.hash,
        urlParams = new URLSearchParams(queryString.substr(1)),
        urlAccesToken = urlParams.get('access_token'),
        urlExpires = urlParams.get('expires_in');
      if (urlAccesToken && urlExpires) {
        accessToken = urlAccesToken;
        expires = +urlExpires;
        window.setTimeout(() => (accessToken = ''), expires * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      }
      window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    }
  },
  search: async (term) => {
    try {
      const fetchResponse = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const response = await fetchResponse.json();
      if (response.error) throw new Error(response.error);
      return response.tracks.items.map(
        ({ id, name, artists, album: { name: album }, uri }) => ({
          id,
          name,
          artist: artists[0].name,
          album,
          uri,
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  },
  savePlaylist: async (playlistName = 'savedPlaylist', uris) => {
    if (!playlistName || !uris) return;
    const headers = { Authorization: `Bearer ${accessToken}` };
    const userIdResponse = await fetch('https://api.spotify.com/v1/me', {
      headers,
    });
    const { id: user_id } = await userIdResponse.json();
    const createPlaylistResponse = await fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: playlistName,
        }),
      }
    );
    const { id: playlist_id } = await createPlaylistResponse.json();
    const addTracksToPlaylistResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          uris,
        }),
      }
    );
    await addTracksToPlaylistResponse.json();
  },
};

export default Spotify;
