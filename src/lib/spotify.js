import querystring from 'querystring';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';

const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Failed to get access token');
  }
};

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();
  if (!accessToken) {
    return null;
  }

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getRecentlyPlayed = async () => {
  const limit = 5;
  const before = new Date().getTime() + 1000;
  const params = new URLSearchParams({
    limit,
    before,
  }).toString();

  const { access_token: accessToken } = await getAccessToken();
  if (!accessToken) {
    return null;
  }

  return fetch(`${RECENTLY_PLAYED_ENDPOINT}?${params}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
