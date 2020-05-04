const CLIENT_ID = "fc2449106d7a4ec3a50a812ab699cf89";
const REDIRECT_URI = "http://localhost:3000/";

let accessToken;
let expires;

const Spotify = {
  getAccesToken: () => {
    if (accessToken) return accessToken;
    {
      const queryString = window.location.search,
        urlParams = new URLSearchParams(queryString),
        urlAccesToken = urlParams.get("access_token"),
        urlExpires = urlParams.get("expires");
      if (urlAccesToken && urlExpires) {
        accessToken = urlAccesToken;
        expires = Number(urlExpires);
        window.setTimeout(() => (accessToken = ""), expires * 1000);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      }
      window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    }
  },
  search: async (term) => {
      console.log(term)
      try {
          const fetchResponse = await fetch(
            `https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          );
          const response = await fetchResponse.json();
        //   console.log('response', response)
          
      } catch (error) {
          console.log(error)
      }
    // return response.map(
    //   ({ id: ID, name: Name, artists, album: { name: Album }, uri: URI }) => ({
    //     ID,
    //     Name,
    //     Artist: artists[0].name,
    //     Album,
    //     URI,
    //   })
    // );
  },
};

export default Spotify;
