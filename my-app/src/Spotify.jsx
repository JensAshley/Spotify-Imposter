export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const clientId = "";

const scope = [
    "user-read-currently-playing"
]

export const loginUrl = `${authEndpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scope.join("%20")}
&response_type=token
&show_dialog=true`