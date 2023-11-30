import { getRecentlyPlayed } from '../../../lib/spotify';
import { normalizeRecentlyPlayed } from '../../../lib/utils/normalizeSpotify';

export default async function handler(req, res) {
  const response = await getRecentlyPlayed().catch((err) => res
    .status(200) // prevent the error from being sent to the client
    .json({ recently_played: false, message: 'Are you connected?', extra: err }));

  if (!response) {
    return res.status(500).json({ error: 'Spotify not available' });
  }

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ recently_played: false });
  }

  const { items = [] } = await response.json();

  const data = items.map(normalizeRecentlyPlayed).sort((a, b) => b.played_at - a.played_at)[0];

  return res.status(200).json(data);
}
