import SpotifyTokenSingleton from "./SpotifyTokenSingleton";

export class SpotifyGateway {
  static async login(): Promise<string> {
    const spotifyAuthUrl = 'https://accounts.spotify.com/api/token';

    const response = await fetch(spotifyAuthUrl, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.SPOTIFY_CLIENT_ID || '',
        client_secret: process.env.SPOTIFY_CLIENT_SECRET || '',
      }),
      cache: 'no-store'
    })

    const data = await response.json();
    const {access_token: accessToken} = data
    return accessToken
  } 

  static async getCategories() {
    const url = 'https://api.spotify.com/v1/browse/categories?country=BR&locale=pt_BR';
    const response = await SpotifyGateway.fetchWithAuth(url);
    if(!response.ok) {
      throw new Error('Error fetching categories')
    }
    const data = await response.json();
    return data
  }

  static async getPlaylists(categoryId: string) {
    const url = 'https://api.spotify.com/v1/browse/categories/' + categoryId + '/playlists';
    const response = await SpotifyGateway.fetchWithAuth(url);
    if(!response.ok) {
      throw new Error('Error fetching playlists')
    }
    const data = await response.json();
    return data
  }

  static async getTracks(playlistId: string) {
    const url = 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks';
    const response = await SpotifyGateway.fetchWithAuth(url);
    if(!response.ok) {
      throw new Error('Error fetching tracks')
    }
    const data = await response.json();
    return data
  }

  private static async fetchWithAuth(url: string) {
    const token = await SpotifyTokenSingleton.getAccessToken()
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  }
}